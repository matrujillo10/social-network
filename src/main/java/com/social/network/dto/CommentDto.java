package com.social.network.dto;

import com.social.network.model.Comment;
import com.social.network.model.Post;
import com.social.network.model.User;

public class CommentDto {
	private int id;
	private String comment;
	private User user;
	private Post post;
	
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
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Post getPost() {
		return post;
	}
	public void setPost(Post post) {
		this.post = post;
	}
	
	public static CommentDto model2dto(Comment model) {
		CommentDto dto = new CommentDto();
		dto.setId(model.getId());
		dto.setComment(model.getComment());
		dto.setUser(model.getUser());
		dto.setPost(model.getPost());
		return dto;
	}
}
