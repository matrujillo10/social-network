package com.social.network.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "La entidad ya existe")
public class EntityAlreadyExistsException extends RuntimeException {
	private static final long serialVersionUID = 1L;
}