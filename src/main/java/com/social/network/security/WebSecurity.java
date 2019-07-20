package com.social.network.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.social.network.service.UserService;

@Configuration
@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {
	
	@Value("${auth.jwt.secretkey}")
	private String SUPER_SECRET_KEY;
	
	@Value("${auth.jwt.time}")
	private long TOKEN_EXPIRATION_TIME;
	
	@Value("${auth.jwt.issuer}")
	private String INFO_ISSUER;
	
	@Autowired
	private UserService userService;
	
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		/*
		 * 1. Se desactiva el uso de cookies
		 * 2. Se activa la configuración CORS con los valores por defecto
		 * 3. Se desactiva el filtro CSRF
		 * 4. Se indica que el login no requiere autenticación
		 * 5. Se indica que el resto de URLs esten securizadas
		 */
		httpSecurity
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED).and()
			.cors().and()
			.csrf().disable()
			.authorizeRequests()
			.antMatchers(HttpMethod.GET, "/users", "/downloadFile/**").permitAll()
			.antMatchers(HttpMethod.POST, "/login", "/users").permitAll()
			.anyRequest().authenticated().and()
				.addFilter(new JWTAuthenticationFilter(
						authenticationManager(),
						userService,
						SUPER_SECRET_KEY,
						TOKEN_EXPIRATION_TIME,
						INFO_ISSUER))
				.addFilter(new JWTAuthorizationFilter(authenticationManager(),
						SUPER_SECRET_KEY));
	}

	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		// Se define la clase que recupera los usuarios y el algoritmo para procesar las passwords
		auth.userDetailsService(userService).passwordEncoder(bCryptPasswordEncoder());
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration cc = new CorsConfiguration();
		cc.addAllowedOrigin("http://localhost:4200");
		cc.addAllowedHeader("*");
		cc.addAllowedMethod("GET");
		cc.addAllowedMethod("POST");
		cc.addAllowedMethod("DELETE");
		cc.addAllowedMethod("PUT");
		cc.addAllowedMethod("OPTIONS");
		cc.setAllowCredentials(true);
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", cc);
		return source;
	}
}
