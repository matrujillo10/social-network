package com.social.network.dto;

public class FriendshipPKDto {
	private UserDto sender;
	private UserDto recipient;
	public UserDto getSender() {
		return sender;
	}
	public void setSender(UserDto sender) {
		this.sender = sender;
	}
	public UserDto getRecipient() {
		return recipient;
	}
	public void setRecipient(UserDto recipient) {
		this.recipient = recipient;
	}	
}
