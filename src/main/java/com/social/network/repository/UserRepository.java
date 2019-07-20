package com.social.network.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.social.network.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	@Query(value = "SELECT u FROM User u WHERE u.email = ?1")
	User findByEmail(String email);
	
	@Query(value = 
			"SELECT * "
			+ "FROM USER u "
			+ "WHERE u.email = ?1 AND u.password = ?2",
			nativeQuery = true)
	User login(String email, String password);
	
	@Query(value = 
			"SELECT * "
			+ "FROM USER u "
			+ "WHERE LOWER(CONCAT(u.NAME,u.LASTNAME)) like %?1%",
			nativeQuery = true)
	List<User> findByName(String name);
	
	@Query(value = 
			  "SELECT * "
			+ "FROM USER u "
			+ "WHERE u.ID = ?2 AND (?1 IN (SELECT f.ID_SENDER FROM Friendship f WHERE f.ID_RECIPIENT = ?2) OR "
			+ "?1 IN (SELECT f.ID_RECIPIENT FROM Friendship f WHERE f.ID_SENDER = ?2))",
			nativeQuery = true)
	User findFriend(int uID1, int UID2);
	
}
