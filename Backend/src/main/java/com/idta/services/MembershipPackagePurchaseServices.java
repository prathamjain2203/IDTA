package com.idta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.idta.dao.MembershipPackagePurchaseDao;
import com.idta.entity.MemberPackageEntity.MembershipPackagePurchase;

@Service
public class MembershipPackagePurchaseServices {

	@Autowired
	private MembershipPackagePurchaseDao membershipPackagePurchaseDao;

	public MembershipPackagePurchase findMembershipPackagePurchaseByUserPrimaryKey(String userPrimaryKey) {
		return membershipPackagePurchaseDao.findByUserPrimaryKey(userPrimaryKey);
	}

	public MembershipPackagePurchase saveMembershipPackagePurchase(
			MembershipPackagePurchase membershipPackagePurchase) {
		return membershipPackagePurchaseDao.save(membershipPackagePurchase);
	}

}
