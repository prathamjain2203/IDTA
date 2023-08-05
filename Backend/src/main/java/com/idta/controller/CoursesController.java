package com.idta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idta.entity.ErrorObject;
import com.idta.entity.CourseEntity.Courses;
import com.idta.services.CoursesServices;

@RestController
@RequestMapping("/courses")
public class CoursesController {

	@Autowired
	CoursesServices coursesServices;

	@GetMapping("/courses")
	public List<Courses> getCourses() {
		return coursesServices.getCourses();
	}

	@GetMapping("/course/{coursePrimaryKey}")
	public ResponseEntity<Object> getCourse(@PathVariable String coursePrimaryKey) {
		Courses course = coursesServices.getCourse(coursePrimaryKey);
		if (course == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorObject(
					"/courses/course/" + coursePrimaryKey, "Bad Request", "Email Already Taken", "400"));
		} else {
			return ResponseEntity.ok(course);
		}
	}

	@GetMapping("/getCoursePurchases/{userPrimaryKey}")
	public List<Courses> purchases(@PathVariable String userPrimaryKey) {
		return coursesServices.purchases(userPrimaryKey);
	}

}
