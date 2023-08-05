package com.idta.entity.CourseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "CoursePurchase")
public class CoursePurchase {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String userPrimaryKey;

	@Column(nullable = false)
	private String coursePrimaryKey;

	public CoursePurchase() {
		super();
	}

	public CoursePurchase(Long id, String userPrimaryKey, String coursePrimaryKey) {
		super();
		this.id = id;
		this.userPrimaryKey = userPrimaryKey;
		this.coursePrimaryKey = coursePrimaryKey;
	}

	public CoursePurchase(String userPrimaryKey, String coursePrimaryKey) {
		super();
		this.userPrimaryKey = userPrimaryKey;
		this.coursePrimaryKey = coursePrimaryKey;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserPrimaryKey() {
		return userPrimaryKey;
	}

	public void setUserPrimaryKey(String userPrimaryKey) {
		this.userPrimaryKey = userPrimaryKey;
	}

	public String getCoursePrimaryKey() {
		return coursePrimaryKey;
	}

	public void setCoursePrimaryKey(String coursePrimaryKey) {
		this.coursePrimaryKey = coursePrimaryKey;
	}

}
