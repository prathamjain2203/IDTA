package com.idta.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.idta.entity.CourseEntity.CoursePurchase;

@Repository
public interface CoursePurchaseDao extends JpaRepository<CoursePurchase, Long> {

	List<CoursePurchase> findByUserPrimaryKey(String userPrimaryKey);
	List<CoursePurchase> findByCoursePrimaryKey(String coursePrimaryKey);

}
