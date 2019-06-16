package com.social.network.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.social.network.model.Comment;
import com.social.network.model.Post;
import com.social.network.model.User;

public interface CommentRepository extends JpaRepository<Comment, Integer>{
	@Query(value = "SELECT * FROM Comment c WHERE c.user = ?1")
	List<Comment> findByUser(User user);
	
	@Query(value = "SELECT * FROM Comment c WHERE c.post = ?1")
	List<Comment> findByPost(Post post);
}
