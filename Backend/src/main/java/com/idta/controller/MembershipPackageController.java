package com.idta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idta.entity.MemberPackageEntity.MembershipPackage;
import com.idta.services.MembershipPackageService;

@RestController
@RequestMapping("/membership")
public class MembershipPackageController {

	@Autowired
	private MembershipPackageService membershipPackageService;

	@GetMapping("/membershipPackages")
	public List<MembershipPackage> membershipPackages() {
		return membershipPackageService.findMembershipPackage();
	}

	@GetMapping("/membershipPackage/{membershipPackagePrimaryKey}")
	public Object membershipPackage(@PathVariable String membershipPackagePrimaryKey) {
		return membershipPackageService.findMembershipPackageByMembershipPackagePrimaryKey(membershipPackagePrimaryKey);
	}

}
