package com.idta.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.idta.entity.Payment;

@Repository
public interface PaymentDao extends JpaRepository<Payment, Long> {

	Payment findByReceipt(String recipt);

	Payment findByOrderId(String orderId);

	Payment findByUserPrimaryKey(String userPrimaryKey);

}