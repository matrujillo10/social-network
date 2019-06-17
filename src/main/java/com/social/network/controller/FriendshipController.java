package com.social.network.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.social.network.dto.FriendshipDto;
import com.social.network.model.Friendship;
import com.social.network.model.FriendshipPK;
import com.social.network.model.User;
import com.social.network.service.FriendshipService;

@RestController
public class FriendshipController {
	@Autowired
	private FriendshipService service;
	
	@GetMapping(value = "/friendships", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<FriendshipDto> getAll() {
		List<FriendshipDto> dtos = new ArrayList<>();
		for (Friendship model : service.getAll()) {
			dtos.add(FriendshipDto.model2dto(model));
		}
		return dtos;
	}
	
	@GetMapping(value = "friendships/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody FriendshipDto get(@PathVariable("id") Integer id) {
		return FriendshipDto.model2dto(service.get(id));
	}
	
	@GetMapping(value = "friendships/{recipient}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<FriendshipDto> getForUser(@PathVariable("recipient") User recipient){
		List<FriendshipDto> dtos = new ArrayList<>();
		for(Friendship model : service.getForUser(recipient)) {
			dtos.add(FriendshipDto.model2dto(model));
		}
		return dtos;
	}
	
	@PostMapping(value = "/friendships", consumes = {MediaType.APPLICATION_JSON_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody FriendshipDto create(@RequestBody FriendshipDto dto) {
		return FriendshipDto.model2dto(service.create(dto2model(dto)));
	}
	
	@PutMapping(value = "/friendships/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody FriendshipDto update(@PathVariable("id") Integer id, @RequestBody FriendshipDto dto) {
		return FriendshipDto.model2dto(service.update(id, dto2model(dto)));
	}
	
	@DeleteMapping(value = "/friendships/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody FriendshipDto delete(@PathVariable("id") Integer id) {
		return FriendshipDto.model2dto(service.remove(id));
	}
	
	private Friendship dto2model(FriendshipDto dto) {
		Friendship model = new Friendship();
		FriendshipPK id = new FriendshipPK();
		id.setIdRecipient(dto.getId().getRecipient().getId());
		id.setIdSender(dto.getId().getSender().getId());
		model.setId(id);
		model.setAccepted(dto.getAccepted());
		return model;
	}
}
