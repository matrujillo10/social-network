package com.social.network.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the FRIENDSHIP database table.
 * 
 */
@Entity
@Table(name="`FRIENDSHIP`")
@NamedQuery(name="Friendship.findAll", query="SELECT f FROM Friendship f")
public class Friendship implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private FriendshipPK id;

	private short accepted;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="ID_SENDER", insertable = false, updatable = false)
	private User sender;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="ID_RECIPIENT", insertable = false, updatable = false)
	private User recipient;

	public Friendship() {
	}

	public FriendshipPK getId() {
		return this.id;
	}

	public void setId(FriendshipPK id) {
		this.id = id;
	}

	public short getAccepted() {
		return this.accepted;
	}

	public void setAccepted(short accepted) {
		this.accepted = accepted;
	}

	public User getSender() {
		return this.sender;
	}

	public void setSender(User sender) {
		this.sender = sender;
	}

	public User getRecipient() {
		return this.recipient;
	}

	public void setRecipient(User recipient) {
		this.recipient = recipient;
	}

}