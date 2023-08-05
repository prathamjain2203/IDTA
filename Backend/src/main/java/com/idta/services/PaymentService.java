package com.idta.services;

import com.idta.dao.PaymentDao;
import com.idta.entity.Payment;
import com.idta.utilities.Utilities;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

	@Autowired
	PaymentDao paymentDao;

	private static final String SECRET_ID = "rzp_test_MhgWsGqXzdSuX0";
	private static final String SECRET_KEY = "JOC7SY9AzVpNZip9KCrMYbyF";
	private static final String CURRENCY = "INR";

	public Payment generateOrder(String userPrimaryKey, Long amount) throws RazorpayException {
		RazorpayClient razorpayClient = new RazorpayClient(SECRET_ID, SECRET_KEY);
		String currentRecipt = Utilities.generateTransactionId(6);

		JSONObject orderRequest = new JSONObject();
		orderRequest.put("amount", amount * 100); // amount in paise
		orderRequest.put("currency", CURRENCY);
		orderRequest.put("receipt", currentRecipt);
		orderRequest.put("payment_capture", 1);
		Order order = razorpayClient.orders.create(orderRequest);
//		System.out.println(order);

		Payment payment = new Payment(amount, CURRENCY, currentRecipt, order.get("id"), userPrimaryKey,
				order.get("status"));

		return paymentDao.save(payment);
	}

	public Payment getPaymentByOrderId(String orderId) {
		return paymentDao.findByOrderId(orderId);
	}

	public Payment savePayment(Payment payment) {
		return paymentDao.save(payment);
	}

}