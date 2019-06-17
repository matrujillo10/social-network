package com.social.network.dto;

import com.social.network.model.FriendshipPK;

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
	
	public static FriendshipPKDto model2dto(FriendshipPK model) {
		FriendshipPKDto dto = new FriendshipPKDto();
		UserDto sender = new UserDto();
		sender.setId(model.getIdSender());
		dto.setSender(sender);
		UserDto recipient = new UserDto();
		recipient.setId(model.getIdRecipient());
		dto.setRecipient(recipient);
		return dto;
	}
}
