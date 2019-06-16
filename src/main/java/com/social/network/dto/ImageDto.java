package com.social.network.dto;

import com.social.network.model.Image;
import com.social.network.model.Post;

public class ImageDto {
	
	private int id;
	private String path;
	private Post post;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public Post getPost() {
		return post;
	}
	public void setPost(Post post) {
		this.post = post;
	}
	
	public static ImageDto model2dto(Image model) {
		ImageDto dto = new ImageDto();
		dto.setId(model.getId());
		dto.setPath(model.getPath());
		dto.setPost(model.getPost());
		return dto;
	}
}
