package com.idta.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "jobs")
public class Jobs {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private String name;

	@Column
	private long number;

	@Column
	private String email;

	@Column
	private String message;

	@Column
	private String jobTitle;

	public Jobs() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Jobs(Long id, String name, Long number, String email, String message, String jobTitle) {
		super();
		this.id = id;
		this.name = name;
		this.number = number;
		this.email = email;
		this.message = message;
		this.jobTitle = jobTitle;
	}

	public Jobs(String name, Long number, String email, String message, String jobTitle) {
		super();
		this.name = name;
		this.number = number;
		this.email = email;
		this.message = message;
		this.jobTitle = jobTitle;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getNumber() {
		return number;
	}

	public void setNumber(long number) {
		this.number = number;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

}
