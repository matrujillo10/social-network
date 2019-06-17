package com.social.network.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.social.network.dto.LoginDto;
import com.social.network.dto.UserDto;
import com.social.network.service.UserService;

@RestController
public class LoginController {
	@Autowired
	private UserService service;
	
	@PostMapping(value = "/login", consumes = {MediaType.APPLICATION_JSON_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody UserDto login(@RequestBody LoginDto dto) {
		return UserDto.model2dto(service.login(dto.getEmail(), dto.getPassword()));
	}
}
