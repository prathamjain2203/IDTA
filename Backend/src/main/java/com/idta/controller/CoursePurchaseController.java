package com.idta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idta.entity.ErrorObject;
import com.idta.entity.CourseEntity.CoursePurchase;
import com.idta.services.CoursePurchaseServices;

@RestController
@RequestMapping("/courses")
public class CoursePurchaseController {

	@Autowired
	private CoursePurchaseServices coursePurchaseServices;

	@GetMapping("/purchasesByUser/{userPrimaryKey}")
	public List<CoursePurchase> getPurchasesByUser(@PathVariable String userPrimaryKey) {
		return coursePurchaseServices.getCoursePurchasesByUserPrimaryKey(userPrimaryKey);
	}

	@PostMapping("/purchase")
	public ResponseEntity<Object> purchase(@RequestBody CoursePurchase course) {
		CoursePurchase coursePurchase = coursePurchaseServices.saveCoursePurchase(course);
		if (coursePurchase == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new ErrorObject("/courses/purchase", "Bad Request", "Email Already Taken", "400"));
		} else {
			return ResponseEntity.ok(coursePurchase);
		}
	}

}
