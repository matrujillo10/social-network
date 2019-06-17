package com.social.network.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the USER database table.
 * 
 */
@Entity
@NamedQuery(name="User.findAll", query="SELECT u FROM User u")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@Temporal(TemporalType.DATE)
	private Date birthday;

	private String email;

	private String lastname;

	private String name;

	private String password;

	private String phone;
	
	private String aboutMe;

	//bi-directional many-to-one association to Friendship
	@OneToMany(mappedBy="sender")
	private List<Friendship> friendshipsSent;

	//bi-directional many-to-one association to Friendship
	@OneToMany(mappedBy="recipient")
	private List<Friendship> friendshipsRecieved;

	//bi-directional many-to-one association to Post
	@OneToMany(mappedBy="creator")
	private List<Post> postsCreated;

	//bi-directional many-to-one association to Post
	@OneToMany(mappedBy="recipient")
	private List<Post> postsRecieved;

	//bi-directional many-to-one association to Comment
	@OneToMany(mappedBy="user")
	private List<Comment> comments;

	public User() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getBirthday() {
		return this.birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLastname() {
		return this.lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return this.phone;
	}
	
	public String getAboutMe() {
		return aboutMe;
	}

	public void setAboutMe(String aboutMe) {
		this.aboutMe = aboutMe;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public List<Friendship> getFriendshipsSent() {
		return this.friendshipsSent;
	}

	public void setFriendshipsSent(List<Friendship> friendshipsSent) {
		this.friendshipsSent = friendshipsSent;
	}

	public Friendship addFriendshipsSent(Friendship friendshipsSent) {
		getFriendshipsSent().add(friendshipsSent);
		friendshipsSent.setSender(this);

		return friendshipsSent;
	}

	public Friendship removeFriendshipsSent(Friendship friendshipsSent) {
		getFriendshipsSent().remove(friendshipsSent);
		friendshipsSent.setSender(null);

		return friendshipsSent;
	}

	public List<Friendship> getFriendshipsRecieved() {
		return this.friendshipsRecieved;
	}

	public void setFriendshipsRecieved(List<Friendship> friendshipsRecieved) {
		this.friendshipsRecieved = friendshipsRecieved;
	}

	public Friendship addFriendshipsRecieved(Friendship friendshipsRecieved) {
		getFriendshipsRecieved().add(friendshipsRecieved);
		friendshipsRecieved.setRecipient(this);

		return friendshipsRecieved;
	}

	public Friendship removeFriendshipsRecieved(Friendship friendshipsRecieved) {
		getFriendshipsRecieved().remove(friendshipsRecieved);
		friendshipsRecieved.setRecipient(null);

		return friendshipsRecieved;
	}

	public List<Post> getPostsCreated() {
		return this.postsCreated;
	}

	public void setPostsCreated(List<Post> postsCreated) {
		this.postsCreated = postsCreated;
	}

	public Post addPostsCreated(Post postsCreated) {
		getPostsCreated().add(postsCreated);
		postsCreated.setCreator(this);

		return postsCreated;
	}

	public Post removePostsCreated(Post postsCreated) {
		getPostsCreated().remove(postsCreated);
		postsCreated.setCreator(null);

		return postsCreated;
	}

	public List<Post> getPostsRecieved() {
		return this.postsRecieved;
	}

	public void setPostsRecieved(List<Post> postsRecieved) {
		this.postsRecieved = postsRecieved;
	}

	public Post addPostsRecieved(Post postsRecieved) {
		getPostsRecieved().add(postsRecieved);
		postsRecieved.setRecipient(this);

		return postsRecieved;
	}

	public Post removePostsRecieved(Post postsRecieved) {
		getPostsRecieved().remove(postsRecieved);
		postsRecieved.setRecipient(null);

		return postsRecieved;
	}

	public List<Comment> getComments() {
		return this.comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public Comment addComment(Comment comment) {
		getComments().add(comment);
		comment.setUser(this);

		return comment;
	}

	public Comment removeComment(Comment comment) {
		getComments().remove(comment);
		comment.setUser(null);

		return comment;
	}

}