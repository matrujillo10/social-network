package com.social.network.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.social.network.dto.CommentDto;
import com.social.network.model.Comment;
import com.social.network.model.Post;
import com.social.network.model.User;
import com.social.network.service.CommentService;
import com.social.network.service.PostService;
import com.social.network.service.UserService;

@RestController
public class CommentControler {
}
