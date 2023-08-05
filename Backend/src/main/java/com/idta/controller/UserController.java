package com.idta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idta.entity.ErrorObject;
import com.idta.entity.UsersEntity.LoginRequest;
import com.idta.entity.UsersEntity.SignupRequest;
import com.idta.entity.UsersEntity.Users;
import com.idta.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody LoginRequest loginRequest) {
		Users user = userService.login(loginRequest.getEmail(), loginRequest.getPassword());
		if (user == null || user.getStatus() == "Invalid Credentials")
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
					.body(new ErrorObject("/user/login", "Unauthorized", "Invalid Credentials", "401"));
		return ResponseEntity.ok(user);
	}

	@PostMapping("/signup")
	public ResponseEntity<Object> signup(@RequestBody SignupRequest signupRequest) {
		Users user = userService.signup(signupRequest.getFullname(), signupRequest.getEmail(),
				signupRequest.getPassword());
		if (user == null || user.getStatus() == "Email Already Taken")
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new ErrorObject("/user/signup", "Bad Request", "Email Already Taken", "400"));
		return ResponseEntity.ok(user);
	}

	@PutMapping("/saveInfo")
	public ResponseEntity<Object> saveInfo(@RequestBody Users userInfo) {
		System.out.println("Email::" + userInfo.getEmail());
		Users user = userService.saveInfo(userInfo);
		if (user == null)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new ErrorObject("/user/saveInfo", "Bad Request", "User Not Available", "400"));
		return ResponseEntity.ok(user);
	}

	@GetMapping("/getUser/{userPrimaryKey}")
	public ResponseEntity<Object> getuser(@PathVariable String userPrimaryKey) {
		Users user = userService.getUser(userPrimaryKey);
		if (user == null)
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
					new ErrorObject("/user/getUser/" + userPrimaryKey, "Bad Request", "User Not Available", "400"));
		return ResponseEntity.ok(user);
	}

}
