package com.social.network.model;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the IMAGE database table.
 * 
 */
@Entity
@Table(name="`IMAGE`")
@NamedQuery(name="Image.findAll", query="SELECT i FROM Image i")
public class Image implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String path;

	//bi-directional many-to-one association to Post
	@ManyToOne
	@JoinColumn(name="POST_ID")
	private Post post;

	public Image() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPath() {
		return this.path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public Post getPost() {
		return this.post;
	}

	public void setPost(Post post) {
		this.post = post;
	}

}