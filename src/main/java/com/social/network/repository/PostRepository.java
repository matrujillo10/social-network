package com.social.network.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.social.network.model.Post;
import com.social.network.model.User;

public interface PostRepository extends JpaRepository<Post, Integer>{
	@Query(value = "SELECT p FROM Post p WHERE p.creator = ?1")
	List<Post> findByCreator(User creator);
	
	@Query(value = "SELECT p FROM Post p WHERE p.recipient = ?1")
	List<Post> findByRecipient(User recipient);
}
