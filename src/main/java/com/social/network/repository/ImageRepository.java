package com.social.network.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.social.network.model.Image;
import com.social.network.model.Post;

public interface ImageRepository extends JpaRepository<Image, Integer>{
	@Query(value = "SELECT i FROM Image i WHERE i.path = ?1")
	Image findByPath(String path);
	
	@Query(value = "SELECT i FROM Image i WHERE i.post = ?1")
	List<Image> findByPost(Post post);
}
