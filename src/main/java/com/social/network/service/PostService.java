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
import com.social.network.model.Image;
import com.social.network.model.Post;
import com.social.network.model.User;
import com.social.network.repository.PostRepository;

@Service
public class PostService {
	
	@Autowired
	private PostRepository repository;
	
	@Autowired
	private ImageService imageService;
	
	public List<Post> getWall(Integer id) {
		return repository.findWall(id);
	}

	public Post get(Integer id) throws EntityNotFoundException {
		Optional<Post> op = repository.findById(id);
		if (!op.isPresent()) {
			throw new EntityNotFoundException();
		}
		return op.get();
	}
	
	public List<Post> getByCreator(User creator) {
		return repository.findByCreator(creator);
	}
	
	public List<Post> getByRecipient(User recipient) {
		return repository.findByRecipient(recipient);
	}
	

	public Post create(Post model) throws EntityAlreadyExistsException {
		Post post = repository.save(model);
		for (int i = 0; i < post.getImages().size(); i++) {
			Image img = post.getImages().get(i);
			img.setPost(post);
			post.getImages().set(i, imageService.create(img));
		}
		return post;
	}

	public Post update(Integer id, Post model) throws EntityNotFoundException, ServerErrorException {
		Post old = get(id);
		// Se definen los campos que pueden ser nulos. El serialVersionUID es obligatorio acá
		String[] nullables = new String[] {"serialVersionUID","images","comments"};
		// Itera sobre todos los atributos de la clase
		for (Field field : Post.class.getDeclaredFields()) {
			// Si el atributo puede ser nulo, lo salta
			if (Arrays.stream(nullables).anyMatch(field.getName()::equals))	continue;
			try {
				// Si el atributo está en null, le asigna el valor anterior
				if (new PropertyDescriptor(field.getName(), Post.class).getReadMethod().invoke(model) == null) {
					PropertyAccessorFactory
					.forDirectFieldAccess(model)
					.setPropertyValue(field.getName(), 
							new PropertyDescriptor(field.getName(), Post.class)
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

	public Post remove(Integer id) throws EntityNotFoundException {
		Post post = get(id);
		repository.delete(post);
		return post;
	}

}
