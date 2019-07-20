package com.social.network.security;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import io.jsonwebtoken.Jwts;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

	private String SUPER_SECRET_KEY;

	public JWTAuthorizationFilter(AuthenticationManager authManager, String SUPER_SECRET_KEY) {
		super(authManager);
		this.SUPER_SECRET_KEY = SUPER_SECRET_KEY;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		String requestURL = new StringBuilder(req.getRequestURL().toString()).toString();
		if (requestURL.contains("login") || requestURL.contains("signup")) {
			chain.doFilter(req, res);
			return;
		}
		boolean found = false;
		String token = null;
		if (req.getCookies() != null) {
			for(Cookie cookie: req.getCookies()) {
				if ("JWT".equals(cookie.getName())) {
					found = true;
					token = cookie.getValue();
					break;
				}
			}
		}
		if (!found) {
			chain.doFilter(req, res);
			return;
		}
		UsernamePasswordAuthenticationToken authentication = getAuthentication(token);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		chain.doFilter(req, res);
	}

	private UsernamePasswordAuthenticationToken getAuthentication(String token) {
		if (token != null) {
			// Se procesa el token y se recupera el usuario.
			String subject = Jwts.parser()
					.setSigningKey(SUPER_SECRET_KEY)
					.parseClaimsJws(token.replace("Bearer ", ""))
					.getBody()
					.getSubject();
			if (subject != null) {
				return new UsernamePasswordAuthenticationToken(subject, null, new ArrayList<>());
			}
			return new UsernamePasswordAuthenticationToken(subject, subject);
		}
		return null;
	}
}
