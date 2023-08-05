package com.idta.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "contactForm")
public class ContactForm {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private String labName;

	@Column
	private long number;

	@Column
	private String email;

	@Column
	private String website;

	@Column
	private String ownerFullName;

	public ContactForm() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ContactForm(Long id, String labName, long number, String email, String website, String ownerFullName) {
		super();
		this.id = id;
		this.labName = labName;
		this.number = number;
		this.email = email;
		this.website = website;
		this.ownerFullName = ownerFullName;
	}

	public ContactForm(String labName, long number, String email, String website, String ownerFullName) {
		super();
		this.labName = labName;
		this.number = number;
		this.email = email;
		this.website = website;
		this.ownerFullName = ownerFullName;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLabName() {
		return labName;
	}

	public void setLabName(String labName) {
		this.labName = labName;
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

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getOwnerFullName() {
		return ownerFullName;
	}

	public void setOwnerFullName(String ownerFullName) {
		this.ownerFullName = ownerFullName;
	}

}
