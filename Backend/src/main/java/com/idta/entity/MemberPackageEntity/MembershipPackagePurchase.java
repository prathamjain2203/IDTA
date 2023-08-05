package com.idta.entity.MemberPackageEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "MembershipPackagePurchase")
public class MembershipPackagePurchase {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String userPrimaryKey;

	@Column(nullable = false)
	private String membershipPackagePrimaryKey;

	@Column(nullable = false)
	private String date;

	@Column(nullable = false)
	private int availableTill;

	public MembershipPackagePurchase() {
		super();
	}

	public MembershipPackagePurchase(Long id, String userPrimaryKey, String membershipPackagePrimaryKey, String date,
			int availableTill) {
		super();
		this.id = id;
		this.userPrimaryKey = userPrimaryKey;
		this.membershipPackagePrimaryKey = membershipPackagePrimaryKey;
		this.date = date;
		this.availableTill = availableTill;
	}

	public MembershipPackagePurchase(String userPrimaryKey, String membershipPackagePrimaryKey, String date,
			int availableTill) {
		super();
		this.userPrimaryKey = userPrimaryKey;
		this.membershipPackagePrimaryKey = membershipPackagePrimaryKey;
		this.date = date;
		this.availableTill = availableTill;
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

	public String getMembershipPackagePrimaryKey() {
		return membershipPackagePrimaryKey;
	}

	public void setMembershipPackagePrimaryKey(String membershipPackagePrimaryKey) {
		this.membershipPackagePrimaryKey = membershipPackagePrimaryKey;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getAvailableTill() {
		return availableTill;
	}

	public void setAvailableTill(int availableTill) {
		this.availableTill = availableTill;
	}

}
