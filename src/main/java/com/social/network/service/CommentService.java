package com.social.network.service;

import java.beans.IntrospectionException;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.PropertyAccessorFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.social.network.exception.EntityAlreadyExistsException;
import com.social.network.exception.EntityNotFoundException;
import com.social.network.exception.ServerErrorException;
import com.social.network.model.Comment;
import com.social.network.model.Post;
import com.social.network.model.User;
import com.social.network.repository.CommentRepository;

@Service
public class CommentService implements IService<Comment, Integer>{
	@Autowired
	private CommentRepository repository;

	@Override
	public List<Comment> getAll() {
		return repository.findAll();
	}

	@Override
	public Comment get(Integer id) throws EntityNotFoundException {
		Optional<Comment> op = repository.findById(id);
		if (!op.isPresent()) {
			throw new EntityNotFoundException();
		}
		return op.get();
	}
	
	public List<Comment> getByUser(User user) {
		return repository.findByUser(user);
	}
	
	public List<Comment> getByPost(Post post){
		return repository.findByPost(post);
	}

	@Override
	public Comment create(Comment model) throws EntityAlreadyExistsException {
		return repository.save(model);
	}

	@Override
	public Comment update(Integer id, Comment model) throws EntityNotFoundException, ServerErrorException {
		Comment old = get(id);
		// Se definen los campos que pueden ser nulos. El serialVersionUID es obligatorio acá
		String[] nullables = new String[] {"serialVersionUID", "user", "post"};
		// Itera sobre todos los atributos de la clase
		for (Field field : Comment.class.getDeclaredFields()) {
			// Si el atributo puede ser nulo, lo salta
			if (Arrays.stream(nullables).anyMatch(field.getName()::equals))	continue;
			try {
				// Si el atributo está en null, le asigna el valor anterior
				if (new PropertyDescriptor(field.getName(), Comment.class).getReadMethod().invoke(model) == null) {
					PropertyAccessorFactory
					.forDirectFieldAccess(model)
					.setPropertyValue(field.getName(), 
							new PropertyDescriptor(field.getName(), Comment.class)
							.getReadMethod()
							.invoke(old));
				}
			} catch (IllegalArgumentException | IllegalAccessException | InvocationTargetException | IntrospectionException e) {
				e.printStackTrace(System.err);
				throw new ServerErrorException();
			}
		}
		return repository.save(model);
	}

	@Override
	public Comment remove(Integer id) throws EntityNotFoundException {
		Comment comment = get(id);
		repository.delete(comment);
		return comment;
	}
}
