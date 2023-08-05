package com.idta.entity.MemberPackageEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "MembershipPackage")
public class MembershipPackage {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String membershipPackagePrimaryKey;

	@Column(nullable = false)
	private String membershipTitle;

	@Column(nullable = false, length = 2000)
	private String membershipDescription;

	@Column(nullable = false)
	private Float membershipPrice;

	@Column(nullable = false)
	private int availableTill;

	public MembershipPackage() {
		super();
	}

	public MembershipPackage(Long id, String membershipPackagePrimaryKey, String membershipTitle,
			String membershipDescription, Float membershipPrice, int availableTill) {
		super();
		this.id = id;
		this.membershipPackagePrimaryKey = membershipPackagePrimaryKey;
		this.membershipTitle = membershipTitle;
		this.membershipDescription = membershipDescription;
		this.membershipPrice = membershipPrice;
		this.availableTill = availableTill;
	}

	public MembershipPackage(String membershipPackagePrimaryKey, String membershipTitle, String membershipDescription,
			Float membershipPrice, int availableTill) {
		super();
		this.membershipPackagePrimaryKey = membershipPackagePrimaryKey;
		this.membershipTitle = membershipTitle;
		this.membershipDescription = membershipDescription;
		this.membershipPrice = membershipPrice;
		this.availableTill = availableTill;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMembershipPackagePrimaryKey() {
		return membershipPackagePrimaryKey;
	}

	public void setMembershipPackagePrimaryKey(String membershipPackagePrimaryKey) {
		this.membershipPackagePrimaryKey = membershipPackagePrimaryKey;
	}

	public String getMembershipTitle() {
		return membershipTitle;
	}

	public void setMembershipTitle(String membershipTitle) {
		this.membershipTitle = membershipTitle;
	}

	public String getMembershipDescription() {
		return membershipDescription;
	}

	public void setMembershipDescription(String membershipDescription) {
		this.membershipDescription = membershipDescription;
	}

	public Float getMembershipPrice() {
		return membershipPrice;
	}

	public void setMembershipPrice(Float membershipPrice) {
		this.membershipPrice = membershipPrice;
	}

	public int getAvailableTill() {
		return availableTill;
	}

	public void setAvailableTill(int availableTill) {
		this.availableTill = availableTill;
	}

}
