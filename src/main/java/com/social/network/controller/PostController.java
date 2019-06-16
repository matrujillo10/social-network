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

import com.social.network.dto.PostDto;
import com.social.network.model.Post;
import com.social.network.model.User;
import com.social.network.service.PostService;
import com.social.network.service.UserService;

@RestController
public class PostController {
	@Autowired
	private PostService service;
	@Autowired
	private UserService uservice;
	
	@GetMapping(value = "/posts", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<PostDto> getAll(){
		List<PostDto> dtos = new ArrayList<>();
		for (Post model : service.getAll()) {
			dtos.add(PostDto.model2dto(model));
		}
		return dtos;
	}
	
	@GetMapping(value = "/posts/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody PostDto get(@PathVariable("id") Integer id) {
		return PostDto.model2dto(service.get(id));
	}
	
	@GetMapping(value = "/posts/creator/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<PostDto> getByCreator(@PathVariable("id") Integer id){
		User creator = uservice.get(id);
		List<PostDto> dtos = new ArrayList<>();
		for(Post model : service.getByCreator(creator)) {
			dtos.add(PostDto.model2dto(model));
		}
		return dtos;
	}
	
	@GetMapping(value = "/posts/recipient/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<PostDto> getByRecipient(@PathVariable("id") Integer id){
		User recipient = uservice.get(id);
		List<PostDto> dtos = new ArrayList<>();
		for(Post model : service.getByCreator(recipient)) {
			dtos.add(PostDto.model2dto(model));
		}
		return dtos;
	}
	
	@PostMapping(value = "/posts", consumes = {MediaType.APPLICATION_JSON_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody PostDto create(@RequestBody PostDto dto) {
		return PostDto.model2dto(service.create(dto2model(dto)));
	}
	
	@PutMapping(value = "/posts/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody PostDto update(@PathVariable("id") Integer id, @RequestBody PostDto dto) {
		return PostDto.model2dto(service.update(id, dto2model(dto)));
	}
	
	@DeleteMapping(value = "/posts/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody PostDto delete(@PathVariable("id") Integer id) {
		return PostDto.model2dto(service.remove(id));
	}
	
	private Post dto2model(PostDto dto) {
		Post model = new Post();
		model.setId(dto.getId());
		model.setContent(dto.getContent());
		model.setCreator(dto.getCreator());
		model.setRecipient(dto.getRecipient());
		model.setImages(dto.getImages());
		model.setComments(dto.getComments());
		return model;
	}
	
}
