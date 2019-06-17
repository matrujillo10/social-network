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
import com.social.network.repository.ImageRepository;

@Service
public class ImageService implements IService<Image, Integer>{

	@Autowired
	private ImageRepository repository;
	
	@Override
	public List<Image> getAll() {
		return repository.findAll();
	}

	@Override
	public Image get(Integer id) throws EntityNotFoundException {
		Optional<Image> op = repository.findById(id);
		if (!op.isPresent()) {
			throw new EntityNotFoundException();
		}
		return op.get();
	}
	
	public Image getByPath(String path) {
		return repository.findByPath(path);
	}
	
	public List<Image> getByPost(Post post){
		return repository.findByPost(post);
	}

	@Override
	public Image create(Image model) throws EntityAlreadyExistsException {
		return repository.save(model);
	}

	@Override
	public Image update(Integer id, Image model) throws EntityNotFoundException, ServerErrorException {
		Image old = get(id);
		// Se definen los campos que pueden ser nulos. El serialVersionUID es obligatorio acá
		String[] nullables = new String[] {"serialVersionUID"};
		// Itera sobre todos los atributos de la clase
		for (Field field : Image.class.getDeclaredFields()) {
			// Si el atributo puede ser nulo, lo salta
			if (Arrays.stream(nullables).anyMatch(field.getName()::equals))	continue;
			try {
				// Si el atributo está en null, le asigna el valor anterior
				if (new PropertyDescriptor(field.getName(), Image.class).getReadMethod().invoke(model) == null) {
					PropertyAccessorFactory
					.forDirectFieldAccess(model)
					.setPropertyValue(field.getName(), 
							new PropertyDescriptor(field.getName(), Image.class)
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
	public Image remove(Integer id) throws EntityNotFoundException {
		Image image = get(id);
		repository.delete(image);
		return image;
	}

}
