package com.social.network.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the FRIENDSHIP database table.
 * 
 */
@Embeddable
public class FriendshipPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="ID_SENDER")
	private int idSender;

	@Column(name="ID_RECIPIENT")
	private int idRecipient;

	public FriendshipPK() {
	}
	public int getIdSender() {
		return this.idSender;
	}
	public void setIdSender(int idSender) {
		this.idSender = idSender;
	}
	public int getIdRecipient() {
		return this.idRecipient;
	}
	public void setIdRecipient(int idRecipient) {
		this.idRecipient = idRecipient;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof FriendshipPK)) {
			return false;
		}
		FriendshipPK castOther = (FriendshipPK)other;
		return 
			(this.idSender == castOther.idSender)
			&& (this.idRecipient == castOther.idRecipient);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.idSender;
		hash = hash * prime + this.idRecipient;
		
		return hash;
	}
}