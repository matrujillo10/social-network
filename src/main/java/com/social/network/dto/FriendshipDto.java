package com.social.network.dto;

import com.social.network.model.Friendship;
import com.social.network.model.FriendshipPK;


public class FriendshipDto {
	private FriendshipPK id;
	private short accepted;
	public FriendshipPK getId() {
		return id;
	}
	public void setId(FriendshipPK id) {
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
		dto.setId(model.getId());
		dto.setAccepted(model.getAccepted());
		return dto;
	}
}
