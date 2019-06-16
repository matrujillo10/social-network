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
import com.social.network.model.Friendship;
import com.social.network.model.User;
import com.social.network.repository.FriendshipRepository;

@Service
public class FriendshipService implements IService<Friendship, Integer>{
	@Autowired
	private FriendshipRepository repository;

	@Override
	public List<Friendship> getAll() {
		return repository.findAll();
	}

	@Override
	public Friendship get(Integer id) throws EntityNotFoundException {
		Optional<Friendship> op = repository.findById(id);
		if (!op.isPresent()) {
			throw new EntityNotFoundException();
		}
		return op.get();
	}
	
	public List<Friendship> getForUser(User recipient) throws EntityNotFoundException{
		return repository.findForUser(recipient);
	}

	@Override
	public Friendship create(Friendship model) throws EntityAlreadyExistsException {
		return repository.save(model);
	}

	@Override
	public Friendship update(Integer id, Friendship model) throws EntityNotFoundException, ServerErrorException {
		Friendship old = get(id);
		// Se definen los campos que pueden ser nulos. El serialVersionUID es obligatorio acá
		String[] nullables = new String[] {"serialVersionUID"};
		// Itera sobre todos los atributos de la clase
		for (Field field : Friendship.class.getDeclaredFields()) {
			// Si el atributo puede ser nulo, lo salta
			if (Arrays.stream(nullables).anyMatch(field.getName()::equals))	continue;
			try {
				// Si el atributo está en null, le asigna el valor anterior
				if (new PropertyDescriptor(field.getName(), Friendship.class).getReadMethod().invoke(model) == null) {
					PropertyAccessorFactory
					.forDirectFieldAccess(model)
					.setPropertyValue(field.getName(), 
							new PropertyDescriptor(field.getName(), Friendship.class)
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
	public Friendship remove(Integer id) throws EntityNotFoundException {
		Friendship friendship = get(id);
		repository.delete(friendship);
		return friendship;
	}

}
