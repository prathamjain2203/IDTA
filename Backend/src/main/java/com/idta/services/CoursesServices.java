package com.idta.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.idta.dao.CoursesDao;
import com.idta.entity.CourseEntity.CoursePurchase;
import com.idta.entity.CourseEntity.Courses;

@Service
public class CoursesServices {

	@Autowired
	private CoursesDao coursesDao;

	@Autowired
	private CoursePurchaseServices coursePurchaseServices;

	public List<Courses> getCourses() {
		return coursesDao.findAll();
	}

	public Courses getCourse(String coursePrimaryKey) {
		return coursesDao.findByCoursePrimaryKey(coursePrimaryKey);
	}

	public List<Courses> purchases(String userPrimaryKey) {
		List<Courses> courses = new ArrayList<>();

		List<CoursePurchase> coursePurchases = coursePurchaseServices
				.getCoursePurchasesByUserPrimaryKey(userPrimaryKey);
		for (CoursePurchase coursePurchase : coursePurchases)
			courses.add(getCourse(coursePurchase.getCoursePrimaryKey()));

		return courses;
	}

}
