package com.idta.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.idta.entity.CourseEntity.Courses;

@Repository
public interface CoursesDao extends JpaRepository<Courses, Long> {

	public Courses findByCoursePrimaryKey(String coursePrimaryKey);

}
