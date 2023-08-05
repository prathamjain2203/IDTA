package com.idta.services;

import com.idta.dao.PaymentDao;
import com.idta.entity.Payment;
import com.idta.entity.CourseEntity.Courses;
import com.idta.utilities.Utilities;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.model.checkout.Session;
import com.stripe.param.PaymentIntentCreateParams;
import com.stripe.param.checkout.SessionCreateParams;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

	@Autowired
	PaymentDao paymentDao;
	@Autowired
	CoursesServices coursesServices;

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
		// System.out.println(order);

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

	// Stripe
	public PaymentIntent createPaymentIntent(String userPrimaryKey, Long amount) throws StripeException {
		Stripe.apiKey = "sk_test_51NbcsCSJmskiVUyUD3gXA6oAfxvCbuGr06viiMWQaX8FaigSv6xf3SB9ANxdKqBoksoo6yJ580hC299Z38xKOxEZ00pKrpyWlL";

		PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
				.setAmount(amount)
				.setCurrency("usd")
				.setAutomaticPaymentMethods(
						PaymentIntentCreateParams.AutomaticPaymentMethods
								.builder()
								.setEnabled(true)
								.build())
				.build();

		// Create a PaymentIntent with the order amount and currency
		PaymentIntent paymentIntent = PaymentIntent.create(params);
		return paymentIntent;
	}

}