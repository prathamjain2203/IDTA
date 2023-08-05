package com.idta.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.idta.entity.MemberPackageEntity.MembershipPackage;

@Repository
public interface MembershipPackageDao extends JpaRepository<MembershipPackage, Long> {

	MembershipPackage findByMembershipPackagePrimaryKey(String membershipPackagePrimaryKey);

}
