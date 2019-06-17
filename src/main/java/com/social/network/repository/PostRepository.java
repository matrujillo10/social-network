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
	
	/*@Query(value = 
			"SELECT * "
			+ "FROM POST p "
			+ "WHERE p.RECIPIENT_ID IN "
			+ "(SELECT u.ID FROM USER u WHERE u.ID IN "
			+ "	(SELECT f.ID_SENDER FROM FRIENDSHIP "
			+ "	WHERE f.ID_RECIPIENT = ?1) OR "
			+ "	u.ID IN (SELECT f.ID_RECIPIENT FROM FRIENDSHIP "
			+ "	WHERE f.ID_SENDER = ?1)) OR "
			+ "p.CREATOR_ID = ?1 OR "
			+ "p.CREATOR_ID IN "
			+ "(SELECT u.ID FROM USER u WHERE u.ID IN "
			+ "	(SELECT f.ID_SENDER FROM FRIENDSHIP "
			+ "	WHERE f.ID_RECIPIENT = ?1) OR "
			+ "	u.ID IN (SELECT f.ID_RECIPIENT FROM FRIENDSHIP "
			+ "	WHERE f.ID_SENDER = ?1)) "
			+ "ORDER BY p.ID DESC")
	List<Post> findWall(Integer id);*/
	
	@Query(value = 
			"SELECT * "
			+ "FROM POST p "
			+ "WHERE p.RECIPIENT_ID = ?1 "
			+ "OR (p.CREATOR_ID = ?1 AND p.RECIPIENT_ID = ?1) "
			+ "ORDER BY p.ID DESC",
			nativeQuery = true)
	List<Post> findWall(Integer id);
}
