package com.social.network.dto;

import java.util.ArrayList;
import java.util.List;

import com.social.network.model.Comment;
import com.social.network.model.Image;
import com.social.network.model.Post;


public class PostDto {
	private int id;
	private String content;
	private UserDto creator;
	private UserDto recipient;
	private List<ImageDto> images;
	private List<CommentDto> comments;
	
	public UserDto getCreator() {
		return creator;
	}
	
	public void setCreator(UserDto creator) {
		this.creator = creator;
	}
	
	public UserDto getRecipient() {
		return recipient;
	}
	
	public void setRecipient(UserDto recipient) {
		this.recipient = recipient;
	}
	
	public List<ImageDto> getImages() {
		return images;
	}
	
	public void setImages(List<ImageDto> images) {
		this.images = images;
	}
	
	public List<CommentDto> getComments() {
		return comments;
	}
	
	public void setComments(List<CommentDto> comments) {
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
		dto.setCreator(UserDto.model2dto(model.getCreator()));
		dto.setRecipient(UserDto.model2dto(model.getRecipient()));
		if (model.getImages() != null) {
			List<ImageDto> images = new ArrayList<>();
			for (Image image: model.getImages()) {
				ImageDto i = new ImageDto();
				i.setId(image.getId());
				i.setPath(image.getPath());
				images.add(i);
			}
			dto.setImages(images);
		}
		if (model.getComments() != null) {
			List<CommentDto> comments = new ArrayList<>();
			for (Comment comment: model.getComments()) {
				comments.add(CommentDto.model2dto(comment));
			}
			dto.setComments(comments);
		}
		
		return dto;
	}
}
