package com.social.network.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.UNAUTHORIZED, reason = "La contraseña no es correcta")
public class PasswordUpdateException extends RuntimeException {
	private static final long serialVersionUID = 1L;
}