package com.idta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.idta.dao.CoursePurchaseDao;
import com.idta.entity.CourseEntity.CoursePurchase;

@Service
public class CoursePurchaseServices {

	@Autowired
	private CoursePurchaseDao coursePurchaseDao;

	public List<CoursePurchase> getCoursePurchases() {
		return coursePurchaseDao.findAll();
	}

	public List<CoursePurchase> getCoursePurchasesByUserPrimaryKey(String userPirmaryKey) {
		return coursePurchaseDao.findByUserPrimaryKey(userPirmaryKey);
	}

	public List<CoursePurchase> getCoursePurchasesByCoursePrimaryKey(String coursePrimaryKey) {
		return coursePurchaseDao.findByCoursePrimaryKey(coursePrimaryKey);
	}

	public CoursePurchase saveCoursePurchase(CoursePurchase course) {
		return coursePurchaseDao.save(course);
	}

}
