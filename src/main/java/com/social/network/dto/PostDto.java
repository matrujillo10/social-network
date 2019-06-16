package com.social.network.dto;

import java.util.List;

import com.social.network.model.Comment;
import com.social.network.model.Image;
import com.social.network.model.Post;
import com.social.network.model.User;


public class PostDto {

	private int id;
	private String content;
	private User creator;
	private User recipient;
	private List<Image> images;
	private List<Comment> comments;
	
	public User getCreator() {
		return creator;
	}
	public void setCreator(User creator) {
		this.creator = creator;
	}
	public User getRecipient() {
		return recipient;
	}
	public void setRecipient(User recipient) {
		this.recipient = recipient;
	}
	public List<Image> getImages() {
		return images;
	}
	public void setImages(List<Image> images) {
		this.images = images;
	}
	public List<Comment> getComments() {
		return comments;
	}
	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	
	public static PostDto model2dto(Post model) {
		PostDto dto = new PostDto();
		dto.setId(model.getId());
		dto.setContent(model.getContent());
		dto.setCreator(model.getCreator());
		dto.setRecipient(model.getRecipient());
		dto.setImages(model.getImages());
		dto.setComments(model.getComments());
		
		return dto;
	}
}
