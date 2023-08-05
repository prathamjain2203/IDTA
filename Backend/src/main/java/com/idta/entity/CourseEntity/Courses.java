package com.idta.entity.CourseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Courses")
public class Courses {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, length = 30)
	private String coursePrimaryKey;

	@Column(nullable = false)
	private String courseTitle;

	@Column(nullable = false, length = 2000)
	private String courseShortDescription;

	@Column(nullable = false, length = 2000)
	private String courseDescription;

	@Column(nullable = false)
	private String courseStartDate;

	@Column(nullable = false, length = 2000)
	private String courseImageUrl;

	@Column(nullable = false)
	private int coursePrice;

	public Courses() {
		super();
	}

	public Courses(Long id, String coursePrimaryKey, String courseTitle, String courseShortDescription,
			String courseDescription, String courseStartDate, String courseImageUrl, int coursePrice) {
		super();
		this.id = id;
		this.coursePrimaryKey = coursePrimaryKey;
		this.courseTitle = courseTitle;
		this.courseShortDescription = courseShortDescription;
		this.courseDescription = courseDescription;
		this.courseStartDate = courseStartDate;
		this.courseImageUrl = courseImageUrl;
		this.coursePrice = coursePrice;
	}

	public Courses(String coursePrimaryKey, String courseTitle, String courseShortDescription, String courseDescription,
			String courseStartDate, String courseImageUrl, int coursePrice) {
		super();
		this.coursePrimaryKey = coursePrimaryKey;
		this.courseTitle = courseTitle;
		this.courseShortDescription = courseShortDescription;
		this.courseDescription = courseDescription;
		this.courseStartDate = courseStartDate;
		this.courseImageUrl = courseImageUrl;
		this.coursePrice = coursePrice;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCoursePrimaryKey() {
		return coursePrimaryKey;
	}

	public void setCoursePrimaryKey(String coursePrimaryKey) {
		this.coursePrimaryKey = coursePrimaryKey;
	}

	public String getCourseTitle() {
		return courseTitle;
	}

	public void setCourseTitle(String courseTitle) {
		this.courseTitle = courseTitle;
	}

	public String getCourseShortDescription() {
		return courseShortDescription;
	}

	public void setCourseShortDescription(String courseShortDescription) {
		this.courseShortDescription = courseShortDescription;
	}

	public String getCourseDescription() {
		return courseDescription;
	}

	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}

	public String getCourseStartDate() {
		return courseStartDate;
	}

	public void setCourseStartDate(String courseStartDate) {
		this.courseStartDate = courseStartDate;
	}

	public String getCourseImageUrl() {
		return courseImageUrl;
	}

	public void setCourseImageUrl(String courseImageUrl) {
		this.courseImageUrl = courseImageUrl;
	}

	public int getCoursePrice() {
		return coursePrice;
	}

	public void setCoursePrice(int coursePrice) {
		this.coursePrice = coursePrice;
	}

}
