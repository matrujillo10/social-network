package com.social.network.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.social.network.model.Friendship;
import com.social.network.model.User;

public interface FriendshipRepository extends  JpaRepository<Friendship, Integer>{
	@Query(value = "SELECT f FROM Friendship f WHERE f.sender = ?1")
	Friendship findBySender(User sender);
	
	@Query(value = "SELECT * FROM Friendship f WHERE f.recipient = ?1")
	List<Friendship> findForUser(User recipient);
}
