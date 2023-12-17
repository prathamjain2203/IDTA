package com.idta.entity.UsersEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "Users")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, length = 30)
	private String userPrimaryKey;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private String email;

	@Column(nullable = false)
	private String password;

	@Column(nullable = true)
	private Long telNumber;

	@Column(nullable = true)
	private String faxNumber;

	@Column(nullable = true)
	private String labEmail;

	@Column(nullable = true)
	private String website;

	@Column(nullable = true)
	private String registered;

	@Column(nullable = true)
	private String labEstablishedDate;

	@Column(nullable = true)
	private String ownerFullName;

	@Column(nullable = true)
	private String workType;

	@Column(nullable = true)
	private String serviceType;

	@Column(nullable = true)
	private String staffProfile;

	@Column(nullable = true)
	private String staffProfileTotal;

	@Column(nullable = true)
	private String registeredTechnician;

	@Column(nullable = true)
	private String registrationNumber;

	@Column(nullable = true)
	private String registrationDate;

	@Column(nullable = true)
	private String profession;

	@Column(nullable = true)
	private String address;

	@Column(nullable = true)
	private String city;

	@Column(nullable = true)
	private String pincode;

	@Transient
	private String status;

	public Users() {
		super();
	}

	public Users(Long id, String userPrimaryKey, String name, String email, String password, Long telNumber,
			String faxNumber, String labEmail, String website, String registered, String labEstablishedDate,
			String ownerFullName, String workType, String serviceType, String staffProfile, String staffProfileTotal,
			String registeredTechnician, String registrationNumber, String registrationDate, String profession, String address, String city, String pincode) {
		super();
		this.id = id;
		this.userPrimaryKey = userPrimaryKey;
		this.name = name;
		this.email = email;
		this.password = password;
		this.telNumber = telNumber;
		this.faxNumber = faxNumber;
		this.labEmail = labEmail;
		this.website = website;
		this.registered = registered;
		this.labEstablishedDate = labEstablishedDate;
		this.ownerFullName = ownerFullName;
		this.workType = workType;
		this.serviceType = serviceType;
		this.staffProfile = staffProfile;
		this.staffProfileTotal = staffProfileTotal;
		this.registeredTechnician = registeredTechnician;
		this.registrationNumber = registrationNumber;
		this.registrationDate = registrationDate;
		this.profession = profession;
		this.address = address;
		this.city = city;
		this.pincode = pincode;
	}

	public Users(String userPrimaryKey, String name, String email, String password, Long telNumber, String faxNumber,
			String labEmail, String website, String registered, String labEstablishedDate, String ownerFullName,
			String workType, String serviceType, String staffProfile, String staffProfileTotal,
			String registeredTechnician, String registrationNumber, String registrationDate, String profession, String address, String city, String pincode) {
		super();
		this.userPrimaryKey = userPrimaryKey;
		this.name = name;
		this.email = email;
		this.password = password;
		this.telNumber = telNumber;
		this.faxNumber = faxNumber;
		this.labEmail = labEmail;
		this.website = website;
		this.registered = registered;
		this.labEstablishedDate = labEstablishedDate;
		this.ownerFullName = ownerFullName;
		this.workType = workType;
		this.serviceType = serviceType;
		this.staffProfile = staffProfile;
		this.staffProfileTotal = staffProfileTotal;
		this.registeredTechnician = registeredTechnician;
		this.registrationNumber = registrationNumber;
		this.registrationDate = registrationDate;
		this.profession = profession;
		this.address = address;
		this.city = city;
		this.pincode = pincode;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getTelNumber() {
		return telNumber;
	}

	public void setTelNumber(Long telNumber) {
		this.telNumber = telNumber;
	}

	public String getFaxNumber() {
		return faxNumber;
	}

	public void setFaxNumber(String faxNumber) {
		this.faxNumber = faxNumber;
	}

	public String getLabEmail() {
		return labEmail;
	}

	public void setLabEmail(String labEmail) {
		this.labEmail = labEmail;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String isRegistered() {
		return registered;
	}

	public void setRegistered(String registered) {
		this.registered = registered;
	}

	public String getLabEstablishedDate() {
		return labEstablishedDate;
	}

	public void setLabEstablishedDate(String labEstablishedDate) {
		this.labEstablishedDate = labEstablishedDate;
	}

	public String getOwnerFullName() {
		return ownerFullName;
	}

	public void setOwnerFullName(String ownerFullName) {
		this.ownerFullName = ownerFullName;
	}

	public String getWorkType() {
		return workType;
	}

	public void setWorkType(String workType) {
		this.workType = workType;
	}

	public String getServiceType() {
		return serviceType;
	}

	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}

	public String getStaffProfile() {
		return staffProfile;
	}

	public void setStaffProfile(String staffProfile) {
		this.staffProfile = staffProfile;
	}

	public String getStaffProfileTotal() {
		return staffProfileTotal;
	}

	public void setStaffProfileTotal(String staffProfileTotal) {
		this.staffProfileTotal = staffProfileTotal;
	}

	public String getRegisteredTechnician() {
		return registeredTechnician;
	}

	public void setRegisteredTechnician(String registeredTechnician) {
		this.registeredTechnician = registeredTechnician;
	}

	public String getRegistrationNumber() {
		return registrationNumber;
	}

	public void setRegistrationNumber(String registrationNumber) {
		this.registrationNumber = registrationNumber;
	}

	public String getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(String registrationDate) {
		this.registrationDate = registrationDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getProfession() {
		return profession;
	}

	public void settProfession(String profession) {
		this.profession = profession;
	}
}
