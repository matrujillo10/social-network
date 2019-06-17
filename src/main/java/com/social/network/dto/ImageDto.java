package com.social.network.dto;

import com.social.network.model.Image;

public class ImageDto {
	
	private int id;
	private String path;
	private String filter;
	
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
	public String getFilter() {
		return filter;
	}
	public void setFilter(String filter) {
		this.filter = filter;
	}
	
	public static ImageDto model2dto(Image model) {
		ImageDto dto = new ImageDto();
		dto.setId(model.getId());
		dto.setPath(model.getPath());
		return dto;
	}
}
