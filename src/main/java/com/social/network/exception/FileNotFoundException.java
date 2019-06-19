package com.social.network.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "La entidad no existe")
public class FileNotFoundException extends RuntimeException {
  private static final long serialVersionUID = 1L;

  public FileNotFoundException(String err) {
    super(err);
  }
}