package com.idta.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idta.entity.MemberPackageEntity.MembershipPackagePurchase;

public interface MembershipPackagePurchaseDao extends JpaRepository<MembershipPackagePurchase, Long> {

	MembershipPackagePurchase findByUserPrimaryKey(String userPrimaryKey);

}
