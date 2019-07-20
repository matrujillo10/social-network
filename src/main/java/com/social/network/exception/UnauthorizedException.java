package com.social.network.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.UNAUTHORIZED, reason = "El usuario no cuenta con permisos suficientes")
public class UnauthorizedException extends RuntimeException {
	private static final long serialVersionUID = 1L;
}