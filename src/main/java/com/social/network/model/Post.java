package com.social.network.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the POST database table.
 * 
 */
@Entity
@NamedQuery(name="Post.findAll", query="SELECT p FROM Post p")
public class Post implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String content;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="CREATOR_ID")
	private User creator;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="RECIPIENT_ID")
	private User recipient;

	//bi-directional many-to-one association to Comment
	@OneToMany(mappedBy="post", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Comment> comments;

	//bi-directional many-to-one association to Image
	@OneToMany(mappedBy="post", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Image> images;

	public Post() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public User getCreator() {
		return this.creator;
	}

	public void setCreator(User creator) {
		this.creator = creator;
	}

	public User getRecipient() {
		return this.recipient;
	}

	public void setRecipient(User recipient) {
		this.recipient = recipient;
	}

	public List<Comment> getComments() {
		return this.comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public Comment addComment(Comment comment) {
		getComments().add(comment);
		comment.setPost(this);

		return comment;
	}

	public Comment removeComment(Comment comment) {
		getComments().remove(comment);
		comment.setPost(null);

		return comment;
	}

	public List<Image> getImages() {
		return this.images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}

	public Image addImage(Image image) {
		getImages().add(image);
		image.setPost(this);

		return image;
	}

	public Image removeImage(Image image) {
		getImages().remove(image);
		image.setPost(null);

		return image;
	}

}