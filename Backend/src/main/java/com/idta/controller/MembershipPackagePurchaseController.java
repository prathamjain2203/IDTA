package com.idta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idta.entity.MemberPackageEntity.MembershipPackagePurchase;
import com.idta.services.MembershipPackagePurchaseServices;

@RestController
@RequestMapping("/membershipPackagePurchase")
public class MembershipPackagePurchaseController {

	@Autowired
	private MembershipPackagePurchaseServices membershipPackagePurchaseServices;

	@GetMapping("/purchase/{userPrimaryKey}")
	public MembershipPackagePurchase getMembershipPackagePurchase(@PathVariable String userPrimaryKey) {
		return membershipPackagePurchaseServices.findMembershipPackagePurchaseByUserPrimaryKey(userPrimaryKey);
	}

	@PostMapping("/purchase")
	public MembershipPackagePurchase purchaseMembershipPackagePurchase(
			@RequestBody MembershipPackagePurchase membershipPackagePurchase) {
		return membershipPackagePurchaseServices.saveMembershipPackagePurchase(membershipPackagePurchase);
	}

}
