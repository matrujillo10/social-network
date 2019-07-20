package com.social.network.dto;

import java.util.Date;

import com.social.network.model.User;

public class UserDto {
	private int id;
	private Date birthday;
	private String email;
	private String lastname;
	private String name;
	private String phone;
	private String password;
	private String aboutMe;
	private String token;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAboutMe() {
		return aboutMe;
	}

	public void setAboutMe(String aboutMe) {
		this.aboutMe = aboutMe;
	}
	

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public static UserDto model2dto(User model) {
		UserDto dto = new UserDto();
		dto.setBirthday(model.getBirthday());
		dto.setEmail(model.getEmail());
		dto.setId(model.getId());
		dto.setLastname(model.getLastname());
		dto.setName(model.getName());
		dto.setPhone(model.getPhone());
		dto.setAboutMe(model.getAboutMe());
		return dto;
	}
	
	public static UserDto model2dtoReduced(User model) {
		UserDto dto = new UserDto();
		dto.setEmail(model.getEmail());
		dto.setName(model.getName());
		return dto;
	}
}
