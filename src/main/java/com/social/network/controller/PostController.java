package com.social.network.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.social.network.dto.ImageDto;
import com.social.network.dto.PostDto;
import com.social.network.dto.UserDto;
import com.social.network.exception.EntityNotFoundException;
import com.social.network.exception.ServerErrorException;
import com.social.network.model.Image;
import com.social.network.model.Post;
import com.social.network.model.User;
import com.social.network.service.PostService;
import com.social.network.service.SocketClient;
import com.social.network.service.UserService;

@RestController
public class PostController {

	@Value("${file.upload-dir}")
	private String uploadDir;
	@Value("${filter.socket.add}")
	private String add;
	@Value("${filter.socket.port}")
	private int port;

	@Autowired
	private PostService service;
	@Autowired
	private UserService uservice;

	/**
	 * Retorna todos los post que se van a mostrar en el muro de un usuairo
	 * @param id del usuario del que se quiere ver el mro
	 * @return todos los post del muro.
	 */
	@GetMapping(value = "/wall/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<PostDto> getWall(@PathVariable("id") Integer id) {
		uservice.get(id); // verifica la existencia del usuario
		List<PostDto> dtos = new ArrayList<>();
		for (Post model : service.getWall(id)) {
			dtos.add(PostDto.model2dto(model));
		}
		return dtos;
	}

	/**
	 * Retorna un post que está en el muro del usuario dado
	 * @param id del usuario al que se le escribió el post
	 * @return
	 */
	@GetMapping(value = "/users/{userID}/posts/{id}", 
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody PostDto get(
			@PathVariable("userID") Integer userID,
			@PathVariable("id") Integer id) {
		User user = uservice.get(userID); // verifica la existencia del usuario
		Post post = service.get(id);
		if (user.getId() != post.getRecipient().getId()) {
			throw new EntityNotFoundException();
		}
		return PostDto.model2dto(post);
	}

	/**
	 * Crea un post con las imagenes.
	 * @param userID id del creador
	 * @param dto post a crear. Acá se debe incluir el id del recibidor del post.
	 * Este id debe ir dentro del objeto recipient.
	 * @return Post creado
	 */
	@PostMapping(value = "/users/{userID}/posts", 
			consumes = {MediaType.MULTIPART_FORM_DATA_VALUE},
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody PostDto create(
			@PathVariable("userID") Integer userID,
			@RequestParam("post") String json,
			@RequestParam("images") MultipartFile[] files) {
		User user = uservice.get(userID); // verifica la existencia del usuario

		ObjectMapper mapper = new ObjectMapper();
		PostDto dto;
		try {
			dto = mapper.readValue(json, PostDto.class);
			List<ImageDto> images = Arrays.asList(files)
					.stream()
					.map(file -> uploadFile(file, dto))
					.collect(Collectors.toList());
			dto.setCreator(UserDto.model2dto(user));
			dto.setImages(images);
			return PostDto.model2dto(service.create(dto2model(dto)));
		} catch (IOException e) {
			throw new ServerErrorException();
		}
	}


	@DeleteMapping(value = "/users/{userID}/posts/{id}", 
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody PostDto delete(
			@PathVariable("userID") Integer userID,
			@PathVariable("id") Integer id){
		User user = uservice.get(userID); // verifica la existencia del usuario
		Post post = service.get(id);
		if (user.getId() != post.getRecipient().getId()) {
			throw new EntityNotFoundException();
		}
		return PostDto.model2dto(service.remove(id));
	}

	private Post dto2model(PostDto dto) {
		Post model = new Post();
		model.setId(dto.getId());
		model.setContent(dto.getContent());
		model.setCreator(uservice.get(dto.getCreator().getId()));
		model.setRecipient(uservice.get(dto.getRecipient().getId()));
		List<Image> images = new ArrayList<>();
		for (ImageDto i : dto.getImages()) {
			Image image = new Image();
			image.setPath(i.getPath());
			images.add(image);
		}
		model.setImages(images);
		return model;
	}

	
	private ImageDto uploadFile(MultipartFile file, PostDto dto) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		ImageDto image = null;
		for (ImageDto i : dto.getImages()) {
			if (i.getPath().contains(fileName)) {
				image = i;
				break;
			}
		}
		if (image == null) {
			throw new EntityNotFoundException();
		}
		try {
			Path fileStorageLocation = Paths.get(uploadDir).toAbsolutePath().normalize();
			Path targetLocation = fileStorageLocation.resolve(fileName);
			Files.copy(file.getInputStream(), 
					targetLocation, 
					StandardCopyOption.REPLACE_EXISTING);
			String outputPath = uploadDir + fileName; 
			if (image.getFilter() != null && !image.getFilter().isEmpty()) {
				String[] f = fileName.split("\\.");
				String command = uploadDir+";;;;"
						+ f[0] + ";;;;"
						+ "."+f[1] + ";;;;"
						+ image.getFilter();
				outputPath = new SocketClient(add, port).process(command);
			}
			image.setPath(outputPath);
			return image;
		} catch (IOException ex) {
			throw new ServerErrorException();
		}
	}
}
