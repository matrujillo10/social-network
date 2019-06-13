package com.social.network.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

import com.social.network.model.User;
import com.social.network.service.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService service;
	
	@GetMapping(value = "/users", produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<User> getAll() {
		return service.getAll();
	}
	
	@GetMapping(value = "/users/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public User getAll(@PathVariable("id") Integer id) {
		return service.get(id);
	}
}
