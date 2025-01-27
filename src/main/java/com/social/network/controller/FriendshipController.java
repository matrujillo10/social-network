package com.social.network.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.social.network.dto.FriendshipDto;
import com.social.network.dto.FriendshipPKDto;
import com.social.network.dto.UserDto;
import com.social.network.exception.UnauthorizedException;
import com.social.network.model.Friendship;
import com.social.network.model.FriendshipPK;
import com.social.network.service.FriendshipService;
import com.social.network.service.UserService;

@RestController
public class FriendshipController {
	@Autowired
	private FriendshipService service;
	@Autowired
	private UserService userService;
	
	/**
	 * Este método retorna la lista de amistades de un usuario.
	 * Únicamente retorna las amistades aceptadas.
	 * @param userID id del usuario del que se quiere conocer las amistades.
	 * @return La lista de las amistades aceptadas por él o al que se las envió.
	 */
	@GetMapping(value = "/users/{userID}/friendships", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<UserDto> getAll(Authentication authentication, @PathVariable("userID") Integer userID) {
		int uid = Integer.parseInt(authentication.getPrincipal().toString());
		if (userID != uid && !userService.areFriends(uid, userID))
			throw new UnauthorizedException();
		userService.get(userID); // Verifica que el usuario exista
		List<UserDto> dtos = new ArrayList<>();
		for (Friendship model : service.getAllFriendships(userID)) {
			if (model.getRecipient().getId() == userID) {
				dtos.add(UserDto.model2dto(model.getSender()));
			} else {
				dtos.add(UserDto.model2dto(model.getRecipient()));
			}
		}
		return dtos;
	}
	
	/**
	 * Este método retorna la lista de amistades por aceptar de un usuario
	 * @param userID id del usuario del que se quiere conocer las amistades.
	 * @return La lista de las amistades pendientes por aceptar por él.
	 */
	@GetMapping(value = "/recipient/{userID}/friendships", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<FriendshipDto> getAllPending(Authentication authentication, @PathVariable("userID") Integer userID) {
		int uid = Integer.parseInt(authentication.getPrincipal().toString());
		if (userID != uid)
			throw new UnauthorizedException();
		userService.get(userID); // Verifica que el usuario exista
		List<FriendshipDto> dtos = new ArrayList<>();
		for (Friendship model : service.getAllFriendshipsPendingByRecipient(userID)) {
			dtos.add(FriendshipDto.model2dto(model));
		}
		return dtos;
	}
	
	/**
	 * Este método retorna la lista de enviadas amistades de un usuario,
	 * que aún no han sido aceptadas
	 * @param userID id del usuario del que se quiere conocer las amistades.
	 * @return La lista de las amistades enviadas por él que no se han aceptado.
	 */
	@GetMapping(value = "/sender/{userID}/friendships", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<FriendshipDto> getAllSent(Authentication authentication, @PathVariable("userID") Integer userID) {
		int uid = Integer.parseInt(authentication.getPrincipal().toString());
		if (userID != uid)
			throw new UnauthorizedException();
		userService.get(userID); // Verifica que el usuario exista
		List<FriendshipDto> dtos = new ArrayList<>();
		for (Friendship model : service.getAllFriendshipsSent(userID)) {
			dtos.add(FriendshipDto.model2dto(model));
		}
		return dtos;
	}
	
	/**
	 * Retorna, si existe, una relación de amistad entre los usuarios dados
	 * @param fID primer id 
	 * @param sID segundo id
	 * @return retorna una relación de amistad entre el usuario del primer id y el segundo
	 */
	@GetMapping(value = "/users/{fID}/users/{sID}/friendships", 
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody FriendshipDto get(
			Authentication authentication, 
			@PathVariable("fID") Integer fID,
			@PathVariable("sID") Integer sID) {
		int uid = Integer.parseInt(authentication.getPrincipal().toString());
		if (fID != uid && sID != uid)
			throw new UnauthorizedException();
		return FriendshipDto.model2dto(service.getFriendshipByUsers(fID, sID));
	}
	
	/**
	 * Este método crea una solicitud de amistad.
	 * @param senderID id del que envía la solicitud de amistad
	 * @param recipientID id del que recibe la solicitud de amistad
	 * @return La solicitud de amistad creada con los datos de los involucrados
	 */
	@PostMapping(value = "/sender/{senderID}/recipient/{recipientID}/friendship", 
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody FriendshipDto create(
			Authentication authentication,
			@PathVariable("senderID") Integer senderID, 
			@PathVariable("recipientID") Integer recipientID) {
		int uid = Integer.parseInt(authentication.getPrincipal().toString());
		if (senderID != uid)
			throw new UnauthorizedException();
		FriendshipDto dto = new FriendshipDto();
		FriendshipPKDto id = new FriendshipPKDto();
		// crea la llave y verifica existencia
		id.setRecipient(UserDto.model2dto(userService.get(recipientID)));
		id.setSender(UserDto.model2dto(userService.get(senderID)));
		dto.setId(id);
		return FriendshipDto.model2dto(service.create(dto2model(dto)));
	}
	
	/**
	 * Este método acepta una solicitud de amistad
	 * @param senderID id del que envió la solicitud
	 * @param recipientID id del que la recibió
	 * @return Solicitud aceptada
	 */
	@PutMapping(value = "/sender/{senderID}/recipient/{recipientID}/friendship", 
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody FriendshipDto update(
			Authentication authentication,
			@PathVariable("senderID") Integer senderID,
			@PathVariable("recipientID") Integer recipientID) {
		int uid = Integer.parseInt(authentication.getPrincipal().toString());
		if (recipientID != uid)
			throw new UnauthorizedException();
		FriendshipPK id = new FriendshipPK();
		id.setIdSender(senderID);
		id.setIdRecipient(recipientID);
		FriendshipDto dto = new FriendshipDto();
		dto.setId(FriendshipPKDto.model2dto(id));
		dto.setAccepted((short) 1);
		return FriendshipDto.model2dto(service.update(id, dto2model(dto)));
	}
	
	/**
	 * Este método rechaza una solicitud de amistad o elimina un amigo.
	 * @param id de la solicitud de amistad
	 * @return solicitud de amistad borrada
	 */
	@DeleteMapping(value = "/users/{fID}/users/{sID}/friendships", 
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody FriendshipDto delete(
			Authentication authentication,
			@PathVariable("fID") Integer fID,
			@PathVariable("sID") Integer sID) {
		int uid = Integer.parseInt(authentication.getPrincipal().toString());
		if (fID != uid && sID != uid)
			throw new UnauthorizedException();
		Friendship f = service.getFriendshipByUsers(fID, sID);
		return FriendshipDto.model2dto(service.remove(f.getId()));
	}
	
	private Friendship dto2model(FriendshipDto dto) {
		Friendship model = new Friendship();
		FriendshipPK id = new FriendshipPK();
		id.setIdRecipient(dto.getId().getRecipient().getId());
		id.setIdSender(dto.getId().getSender().getId());
		model.setId(id);
		model.setAccepted(dto.getAccepted());
		model.setRecipient(userService.get(id.getIdRecipient()));
		model.setSender(userService.get(id.getIdSender()));
		return model;
	}
}
