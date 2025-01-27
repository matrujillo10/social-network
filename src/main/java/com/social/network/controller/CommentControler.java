package com.social.network.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.social.network.dto.CommentDto;
import com.social.network.dto.ImageDto;
import com.social.network.dto.PostDto;
import com.social.network.dto.UserDto;
import com.social.network.exception.UnauthorizedException;
import com.social.network.model.Comment;
import com.social.network.model.Image;
import com.social.network.model.Post;
import com.social.network.model.User;
import com.social.network.service.CommentService;
import com.social.network.service.PostService;
import com.social.network.service.UserService;

@RestController
public class CommentControler {
	
	@Autowired
	private PostService pservice;
	@Autowired
	private CommentService service;
	@Autowired
	private UserService uservice;
	
	@GetMapping(value = "/posts/{postID}/comments", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<CommentDto> getByPost(Authentication authentication, @PathVariable("postID") Integer id){
		int userID = Integer.parseInt(authentication.getPrincipal().toString());
		Post post = pservice.get(id);
		if (!(post.getCreator().getId() == userID || 
				post.getRecipient().getId() == userID ||
				uservice.areFriends(userID, post.getCreator().getId()) ||
				uservice.areFriends(userID, post.getRecipient().getId()))) {
			throw new UnauthorizedException();
		}
		List<CommentDto> commentsDto = new ArrayList<CommentDto>();
		List<Comment> comments = service.getByPost(post);
		for(int i = 0; i < comments.size(); i++) {
			Comment comment = comments.get(i);
			CommentDto commentDto = CommentDto.model2dto(comment);
			commentsDto.add(commentDto);
		}
		return commentsDto;
	}
	
	@PostMapping(value = "/posts/{postID}/comments", produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody CommentDto create(Authentication authentication, @PathVariable("postID") Integer id, @RequestBody CommentDto dto) {
		int userID = Integer.parseInt(authentication.getPrincipal().toString());
		Post post = pservice.get(id);
		if (!(post.getCreator().getId() == userID || 
				post.getRecipient().getId() == userID ||
				uservice.areFriends(userID, post.getCreator().getId()) ||
				uservice.areFriends(userID, post.getRecipient().getId()))) {
			throw new UnauthorizedException();
		}
		PostDto postDto = PostDto.model2dto(post);
		List<CommentDto> comments = postDto.getComments();
		dto.setPost(postDto);
		comments.add(dto);
		postDto.setComments(comments);
		return CommentDto.model2dto(service.create(dto2model(dto)));
	}
	
	private Comment dto2model(CommentDto dto) {
		Comment model = new Comment();
		model.setId(dto.getId());
		model.setComment(dto.getComment());
		model.setPost(postdto2model(dto.getPost()));
		model.setUser(userdto2model(dto.getUser(),false));
		return model;
	}
	
	private Post postdto2model(PostDto dto) {
		Post model = new Post();
		model.setId(dto.getId());
		model.setContent(dto.getContent());
		model.setCreator(uservice.get(dto.getCreator().getId()));
		model.setRecipient(uservice.get(dto.getRecipient().getId()));
		List<Image> images = new ArrayList<>();
		for (ImageDto i : dto.getImages()) {
			Image image = new Image();
			image.setPath(i.getPath());
			images.add(image);
		}
		model.setImages(images);
		return model;
	}
	
	private User userdto2model(UserDto dto, boolean creating) {
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
