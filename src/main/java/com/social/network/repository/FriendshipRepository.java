package com.social.network.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.social.network.model.Friendship;
import com.social.network.model.FriendshipPK;
import com.social.network.model.User;

public interface FriendshipRepository extends  JpaRepository<Friendship, FriendshipPK> {
	@Query(value = "SELECT f FROM Friendship f WHERE f.sender = ?1")
	Friendship findBySender(User sender);
	
	@Query(value = "SELECT * "
			+ "FROM Friendship f "
			+ "WHERE (f.ID_SENDER = ?1 "
			+ "OR f.ID_RECIPIENT = ?1)"
			+ "AND f.ACCEPTED = 1",
			nativeQuery = true)
	List<Friendship> findByUser(Integer userID);
	
	
	@Query(value = "SELECT * "
			+ "FROM Friendship f "
			+ "WHERE f.ID_RECIPIENT = ?1 "
			+ "AND f.ACCEPTED = 0",
			nativeQuery = true)
	List<Friendship> findPendingByRecipient(Integer userID);
	
	@Query(value = "SELECT * "
			+ "FROM Friendship f "
			+ "WHERE f.ID_SENDER = ?1 "
			+ "AND f.ACCEPTED = 0",
			nativeQuery = true)
	List<Friendship> findPendingBySender(Integer userID);
	
	@Query(value = "SELECT * "
			+ "FROM Friendship f "
			+ "WHERE f.ID_SENDER = ?1 "
			+ "AND f.ACCEPTED = 0",
			nativeQuery = true)
	List<Friendship> findSent(Integer userID);
	
	@Query(value = "SELECT * "
			+ "FROM Friendship f "
			+ "WHERE (f.ID_SENDER = ?1 AND f.ID_RECIPIENT = ?2) "
			+ "OR (f.ID_SENDER = ?2 AND f.ID_RECIPIENT = ?1) ",
			nativeQuery = true)
	Friendship findByUsers(Integer fID, Integer sID);
	
	@Query(value = "SELECT f FROM Friendship f WHERE f.recipient = ?1")
	List<Friendship> findForUser(User recipient);
}
