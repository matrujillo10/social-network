package com.social.network.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;

import com.social.network.dto.PasswordUpdateDto;
import com.social.network.dto.UserDto;
import com.social.network.exception.UnauthorizedException;
import com.social.network.model.User;
import com.social.network.service.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService service;
	
	@GetMapping(value = "/users", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<UserDto> getAll(
			@RequestParam(value = "name", required = false) String name) {
		List<User> models;
		if (name != null && !name.isEmpty()) {
			models = service.getAllByName(name);
		} else {
			models = service.getAll();
		}
		List<UserDto> dtos = new ArrayList<>();
		for (User model : models) {
			dtos.add(UserDto.model2dtoReduced(model));
		}
		return dtos;
	}
	
	@GetMapping(value = "/users/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody UserDto get(
			Authentication authentication, 
			@PathVariable("id") Integer id) {
		int uid = Integer.parseInt(authentication.getPrincipal().toString());
		if (id != uid && !service.areFriends(uid, id))
			throw new UnauthorizedException();
		return UserDto.model2dto(service.get(id));
	}
	
	@PostMapping(value = "/users", consumes = {MediaType.APPLICATION_JSON_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody UserDto create(
			Authentication authentication, 
			@RequestBody UserDto dto) {
		return UserDto.model2dto(service.create(dto2model(dto, true)));
	}
	
	@PutMapping(value = "/users/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody UserDto update(
			Authentication authentication, 
			@PathVariable("id") Integer id, 
			@RequestBody UserDto dto) {
		int uid = Integer.parseInt(authentication.getPrincipal().toString());
		if (id != uid || dto.getId() != uid)
			throw new UnauthorizedException();
		return UserDto.model2dto(service.update(id, dto2model(dto, false)));
	}
	
	@PutMapping(value = "/users/{id}/password", consumes = {MediaType.APPLICATION_JSON_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody UserDto updatePassword(
			Authentication authentication, 
			@PathVariable("id") Integer id, 
			@RequestBody PasswordUpdateDto dto) {
		int uid = Integer.parseInt(authentication.getPrincipal().toString());
		if (id != uid)
			throw new UnauthorizedException();
		return UserDto.model2dto(service.updatePassword(id, dto));
	}
	
	@DeleteMapping(value = "/users/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody UserDto delete(
			Authentication authentication, 
			@PathVariable("id") Integer id) {
		int uid = Integer.parseInt(authentication.getPrincipal().toString());
		if (id != uid)
			throw new UnauthorizedException();
		return UserDto.model2dto(service.remove(id));
	}
	
	private User dto2model(UserDto dto, boolean creating) {
		User model = new User();
		if (creating) {
			model.setPassword(dto.getPassword());
		} else {
			model.setId(dto.getId());
		}
		model.setBirthday(dto.getBirthday());
		model.setLastname(dto.getLastname());
		model.setEmail(dto.getEmail());
		model.setName(dto.getName());
		model.setPhone(dto.getPhone());
		model.setAboutMe(dto.getAboutMe());
		return model;
	}
}
