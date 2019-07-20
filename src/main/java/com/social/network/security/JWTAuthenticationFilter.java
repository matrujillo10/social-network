package com.social.network.security;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.social.network.dto.LoginDto;
import com.social.network.dto.UserDto;
import com.social.network.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private String SUPER_SECRET_KEY;
	
	private long TOKEN_EXPIRATION_TIME;
	
	private String INFO_ISSUER;
	
	private UserService userService;
	
	private AuthenticationManager authenticationManager;
	
	public JWTAuthenticationFilter(
			AuthenticationManager authenticationManager,
			UserService userService,
			String SUPER_SECRET_KEY,
			long TOKEN_EXPIRATION_TIME,
			String INFO_ISSUER) {
		super();
		this.authenticationManager = authenticationManager;
		this.userService = userService;
		this.SUPER_SECRET_KEY = SUPER_SECRET_KEY;
		this.TOKEN_EXPIRATION_TIME = TOKEN_EXPIRATION_TIME;
		this.INFO_ISSUER = INFO_ISSUER;
	}
	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		try {
			ByteArrayOutputStream result = new ByteArrayOutputStream();
	        byte[] buffer = new byte[1024];
	        int length;
	        while ((length = request.getInputStream().read(buffer)) != -1) {
	            result.write(buffer, 0, length);
	        }
	        LoginDto validated = new Gson().fromJson(result.toString(StandardCharsets.UTF_8.name()), LoginDto.class);
			return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					validated.getUsername(), validated.getPassword(), new ArrayList<>()));
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication auth) throws IOException, ServletException {
		String email = ((User) auth.getPrincipal()).getUsername();
		com.social.network.model.User usr = userService.findByEmail(email);
		String token = Jwts.builder().setIssuedAt(new Date()).setIssuer(INFO_ISSUER)
				.setSubject(usr.getId()+"")
				.setExpiration(new Date(System.currentTimeMillis() + TOKEN_EXPIRATION_TIME))
				.signWith(SignatureAlgorithm.HS512, SUPER_SECRET_KEY).compact();
		UserDto user = UserDto.model2dto(usr);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		Cookie cookie = new Cookie("JWT", token);
        cookie.setPath("/");
        // cookie.setSecure(true); // Solo si se tiene https
        cookie.setHttpOnly(true);
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.addCookie(cookie);
		response.getWriter().write(new Gson().toJson(user));
	}
}