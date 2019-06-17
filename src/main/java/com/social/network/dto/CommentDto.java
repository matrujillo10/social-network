package com.social.network.dto;

import com.social.network.model.Comment;

public class CommentDto {
	private int id;
	private String comment;
	private UserDto user;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getComment() {
		return comment;
	}
	
	public void setComment(String comment) {
		this.comment = comment;
	}
	
	public UserDto getUser() {
		return user;
	}
	
	public void setUser(UserDto user) {
		this.user = user;
	}
	
	public static CommentDto model2dto(Comment model) {
		CommentDto dto = new CommentDto();
		dto.setId(model.getId());
		dto.setComment(model.getComment());
		dto.setUser(UserDto.model2dto(model.getUser()));
		return dto;
	}
}
