package com.social.network.service;

import java.util.List;

import com.social.network.exception.EntityAlreadyExistsException;
import com.social.network.exception.EntityNotFoundException;
import com.social.network.exception.ServerErrorException;

public interface IService<T, K> {
	List<T> getAll();
	T get(K id) throws EntityNotFoundException;
	T create(T model) throws EntityAlreadyExistsException;
	T update(K id, T model) throws EntityNotFoundException, ServerErrorException;
	T remove(K id) throws EntityNotFoundException;
}
