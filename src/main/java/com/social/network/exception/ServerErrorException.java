package com.social.network.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Error interno")
public class ServerErrorException extends RuntimeException {
	private static final long serialVersionUID = 1L;
}