package com.social.network.dto;

import com.social.network.model.Friendship;


public class FriendshipDto {
	private FriendshipPKDto id;
	private short accepted;
	public FriendshipPKDto getId() {
		return id;
	}
	public void setId(FriendshipPKDto id) {
		this.id = id;
	}
	public short getAccepted() {
		return accepted;
	}
	public void setAccepted(short accepted) {
		this.accepted = accepted;
	}

	public static FriendshipDto model2dto(Friendship model) {
		FriendshipDto dto = new FriendshipDto();
		FriendshipPKDto dtoID = new FriendshipPKDto();
		dtoID.setRecipient(UserDto.model2dto(model.getRecipient()));
		dtoID.setSender(UserDto.model2dto(model.getSender()));
		dto.setId(dtoID);
		dto.setAccepted(model.getAccepted());
		return dto;
	}
}
