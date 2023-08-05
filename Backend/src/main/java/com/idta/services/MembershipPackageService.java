package com.idta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.idta.dao.MembershipPackageDao;
import com.idta.entity.MemberPackageEntity.MembershipPackage;

@Service
public class MembershipPackageService {

	@Autowired
	private MembershipPackageDao membershipPackageDao;

	public List<MembershipPackage> findMembershipPackage() {
		return membershipPackageDao.findAll();
	}

	public MembershipPackage findMembershipPackageByMembershipPackagePrimaryKey(String membershipPackagePrimaryKey) {
		return membershipPackageDao.findByMembershipPackagePrimaryKey(membershipPackagePrimaryKey);
	}

}
