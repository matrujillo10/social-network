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

import com.social.network.dto.ImageDto;
import com.social.network.model.Image;
import com.social.network.model.Post;
import com.social.network.service.ImageService;
import com.social.network.service.PostService;

@RestController
public class ImageController {
	@Autowired
	private ImageService service;
	@Autowired
	private PostService pservice;
	
	@GetMapping(value = "/images", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<ImageDto> getAll(){
		List<ImageDto> dtos = new ArrayList<>();
		for (Image model : service.getAll()) {
			dtos.add(ImageDto.model2dto(model));
		}
		return dtos;
	}
	
	@GetMapping(value = "/images/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody ImageDto get(@PathVariable("id") Integer id) {
		return ImageDto.model2dto(service.get(id));
	}
	
	@GetMapping(value = "/images/{path}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody ImageDto getByPath(@PathVariable("path") String path) {
		return ImageDto.model2dto(service.getByPath(path));
	}
	
	@GetMapping(value = "images/post/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<ImageDto> getByPost(@PathVariable("id") Integer id) {
		List<ImageDto> dtos = new ArrayList<>();
		Post post = pservice.get(id);
		for(Image model : service.getByPost(post)) {
			dtos.add(ImageDto.model2dto(model));
		}
		return dtos;
	}
	
	@PostMapping(value = "/images", consumes = {MediaType.APPLICATION_JSON_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody ImageDto create(@RequestBody ImageDto dto) {
		return ImageDto.model2dto(service.create(dto2model(dto)));
	}
	
	@PutMapping(value = "/images/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody ImageDto update(@PathVariable("id") Integer id, @RequestBody ImageDto dto) {
		return ImageDto.model2dto(service.update(id, dto2model(dto)));
	}
	
	@DeleteMapping(value = "/images/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody ImageDto delete(@PathVariable("id") Integer id) {
		return ImageDto.model2dto(service.remove(id));
	}
	
	private Image dto2model(ImageDto dto) {
		Image model = new Image();
		model.setId(dto.getId());
		model.setPath(dto.getPath());
		model.setPost(dto.getPost());
		return model;
	}
}
