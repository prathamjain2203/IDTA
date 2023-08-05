package com.idta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.idta.dao.UserDao;
import com.idta.entity.UsersEntity.Users;
import com.idta.utilities.Utilities;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;

	public Users login(String email, String password) {
		Users user = userDao.findByEmail(email);
		if (user == null || !user.getPassword().equals(password)) {
			user = new Users();
			user.setStatus("Invalid Credentials");
		}
		return user;
	}

	public Users signup(String fullname, String email, String password) {
		Users user = new Users();
		if (userDao.findByEmail(email) != null) {
			user.setStatus("Email Already Taken");
			return user;
		} else {
			user.setUserPrimaryKey(Utilities.generateRandomId(30));
			user.setName(fullname);
			user.setEmail(email);
			user.setPassword(password);
			return userDao.save(user);
		}
	}

	public Users saveInfo(Users userInfo) {
		return userDao.save(userInfo);
	}

	public Users getUser(String userPrimaryKey) {
		return userDao.findByUserPrimaryKey(userPrimaryKey);
	}

}
