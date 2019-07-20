package com.social.network.service;

import static java.util.Collections.emptyList;

import java.beans.IntrospectionException;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.PropertyAccessorFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.social.network.dto.PasswordUpdateDto;
import com.social.network.exception.EntityAlreadyExistsException;
import com.social.network.exception.EntityNotFoundException;
import com.social.network.exception.LoginException;
import com.social.network.exception.PasswordUpdateException;
import com.social.network.exception.ServerErrorException;
import com.social.network.model.User;

import com.social.network.repository.UserRepository;

@Service
public class UserService implements UserDetailsService, IService<User, Integer> {
	@Autowired
	private UserRepository repository;
	@Autowired
	private BCryptPasswordEncoder bcrypt;
	
	public User login(String email, String password) throws LoginException {
		User user = repository.login(email, DigestUtils.sha256Hex(password));
		if (user == null)
			throw new LoginException();
		return user;
	}
	
	public boolean areFriends(int uID1, int uID2) {
		return repository.findFriend(uID1, uID2) != null;
	}

	@Override
	public List<User> getAll() {
		return repository.findAll();
	}
	
	public List<User> getAllByName(String term) {
		return repository.findByName(term);
	}

	@Override
	public User get(Integer id) throws EntityNotFoundException {
		Optional<User> op = repository.findById(id);
		if (!op.isPresent()) {
			throw new EntityNotFoundException();
		}
		return op.get();
	}

	@Override
	public User create(User model) throws EntityAlreadyExistsException {
		if (repository.findByEmail(model.getEmail()) != null) {
			throw new EntityAlreadyExistsException();
		}
		model.setPassword(bcrypt.encode(model.getPassword()));
		return repository.save(model);
	}
	
	public User updatePassword(Integer id, PasswordUpdateDto dto) {
		User old = get(id);
		if (!bcrypt.matches(dto.getOldPassword(), old.getPassword())) {
			throw new PasswordUpdateException();
		}
		old.setPassword(bcrypt.encode(dto.getNewPassword()));
		return repository.save(old);
	}

	@Override
	public User update(Integer id, User model) throws EntityNotFoundException {
		User old = get(id);
		if (model.getPassword() != null) {
			model.setPassword(bcrypt.encode(model.getPassword()));
		}
		// Se definen los campos que pueden ser nulos. El serialVersionUID es obligatorio acá
		String[] nullables = new String[] {"serialVersionUID"};
		// Itera sobre todos los atributos de la clase
		for (Field field : User.class.getDeclaredFields()) {
			// Si el atributo puede ser nulo, lo salta
			if (Arrays.stream(nullables).anyMatch(field.getName()::equals))	continue;
			try {
				// Si el atributo está en null, le asigna el valor anterior
				if (new PropertyDescriptor(field.getName(), User.class).getReadMethod().invoke(model) == null) {
					PropertyAccessorFactory
					.forDirectFieldAccess(model)
					.setPropertyValue(field.getName(), 
							new PropertyDescriptor(field.getName(), User.class)
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
	public User remove(Integer id) throws EntityNotFoundException {
		User user = get(id);
		repository.delete(user);
		return user;
	}
	
	public User findByEmail(String username) {
		return repository.findByEmail(username);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByEmail(username);
		if (user == null) {
			throw new UsernameNotFoundException(username);
		}
		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), emptyList());
	}
}
