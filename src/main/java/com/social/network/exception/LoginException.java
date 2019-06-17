package com.social.network.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.UNAUTHORIZED, reason = "El correo o la contraseña no son correctos")
public class LoginException extends RuntimeException {
	private static final long serialVersionUID = 1L;
}