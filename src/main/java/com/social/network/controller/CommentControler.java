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

import com.social.network.dto.CommentDto;
import com.social.network.model.Comment;
import com.social.network.model.Post;
import com.social.network.model.User;
import com.social.network.service.CommentService;
import com.social.network.service.PostService;
import com.social.network.service.UserService;

@RestController
public class CommentControler {
	@Autowired
	private CommentService service;
	@Autowired
	private UserService uservice;
	@Autowired
	private PostService pservice;
	
	@GetMapping(value = "/comments", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<CommentDto> getAll(){
		List<CommentDto> dtos = new ArrayList<>();
		for (Comment model : service.getAll()) {
			dtos.add(CommentDto.model2dto(model));
		}
		return dtos;
	}
	
	@GetMapping(value = "/comments/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody CommentDto get(@PathVariable("id") Integer id) {
		return CommentDto.model2dto(service.get(id));
	}
	
	@GetMapping(value = "/comments/user/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<CommentDto> getForUser(@PathVariable("id") Integer id){
		List<CommentDto> dtos = new ArrayList<>();
		User user = uservice.get(id);
		for(Comment model : service.getByUser(user)) {
			dtos.add(CommentDto.model2dto(model));
		}
		return dtos;
	}
	
	@GetMapping(value = "/comments/post/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<CommentDto> getForPost(@PathVariable("id") Integer id){
		List<CommentDto> dtos = new ArrayList<>();
		Post post = pservice.get(id);
		for(Comment model : service.getByPost(post)) {
			dtos.add(CommentDto.model2dto(model));
		}
		return dtos;
	}
	
	@PostMapping(value = "/comments", consumes = {MediaType.APPLICATION_JSON_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody CommentDto create(@RequestBody CommentDto dto) {
		return CommentDto.model2dto(service.create(dto2model(dto)));
	}
	
	@PutMapping(value = "/comments/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody CommentDto update(@PathVariable("id") Integer id, @RequestBody CommentDto dto) {
		return CommentDto.model2dto(service.update(id, dto2model(dto)));
	}
	
	@DeleteMapping(value = "/comments/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody CommentDto delete(@PathVariable("id") Integer id) {
		return CommentDto.model2dto(service.remove(id));
	}
	
	public Comment dto2model(CommentDto dto) {
		Comment model = new Comment();
		model.setId(dto.getId());
		model.setComment(dto.getComment());
		model.setUser(dto.getUser());
		model.setPost(dto.getPost());
		return model;
		}
}
