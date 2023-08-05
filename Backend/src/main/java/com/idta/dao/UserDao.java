package com.idta.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.idta.entity.UsersEntity.Users;

@Repository
public interface UserDao extends JpaRepository<Users, Long> {

	Users findByUserPrimaryKey(String email);
	Users findByEmail(String email);
	Users findByPassword(String password);

}
