package com.idta.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Payment")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column
	private Long amount; // amount in paise

	@Column
	private String currency;

	@Column
	private String receipt;

	@Column
	private String orderId;

	@Column
	private String userPrimaryKey;

	@Column
	private String paymentStatus;

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(Long id, Long amount, String currency, String receipt, String orderId, String userPrimaryKey,
			String paymentStatus) {
		super();
		this.id = id;
		this.amount = amount;
		this.currency = currency;
		this.receipt = receipt;
		this.orderId = orderId;
		this.userPrimaryKey = userPrimaryKey;
		this.paymentStatus = paymentStatus;
	}

	public Payment(Long amount, String currency, String receipt, String orderId, String userPrimaryKey) {
		super();
		this.amount = amount;
		this.currency = currency;
		this.receipt = receipt;
		this.orderId = orderId;
		this.userPrimaryKey = userPrimaryKey;
	}

	public Payment(Long amount, String currency, String receipt, String orderId, String userPrimaryKey,
			String paymentStatus) {
		super();
		this.amount = amount;
		this.currency = currency;
		this.receipt = receipt;
		this.orderId = orderId;
		this.userPrimaryKey = userPrimaryKey;
		this.paymentStatus = paymentStatus;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getReceipt() {
		return receipt;
	}

	public void setReceipt(String receipt) {
		this.receipt = receipt;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getUserPrimaryKey() {
		return userPrimaryKey;
	}

	public void setUserPrimaryKey(String userPrimaryKey) {
		this.userPrimaryKey = userPrimaryKey;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

}
