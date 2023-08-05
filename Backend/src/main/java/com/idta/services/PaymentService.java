package com.idta.services;

import com.idta.dao.PaymentDao;
import com.idta.entity.Payment;
import com.idta.entity.CourseEntity.Courses;
import com.idta.entity.MemberPackageEntity.MembershipPackage;
import com.idta.utilities.Utilities;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import com.stripe.param.checkout.SessionCreateParams.LineItem.PriceData.ProductData;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

	@Autowired
	PaymentDao paymentDao;
	@Autowired
	CoursesServices coursesServices;

	private static final String STRIPE_SECRET_KEY = "sk_test_51NbcsCSJmskiVUyUD3gXA6oAfxvCbuGr06viiMWQaX8FaigSv6xf3SB9ANxdKqBoksoo6yJ580hC299Z38xKOxEZ00pKrpyWlL";

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
	public Session createCourseSession(String userPrimaryKey, Courses course) throws StripeException {
		Stripe.apiKey = STRIPE_SECRET_KEY;
		String currentReceipt = Utilities.generateTransactionId(6);
		String url = "http://localhost:3000/course/" + course.getId();

		Payment payment = new Payment();
		payment.setAmount(course.getCoursePrice());
		payment.setCurrency("INR");
		payment.setReceipt(currentReceipt);
		payment.setUserPrimaryKey(userPrimaryKey);
		payment = paymentDao.save(payment);

		SessionCreateParams params = SessionCreateParams.builder()
				.setMode(SessionCreateParams.Mode.PAYMENT)
				.setSuccessUrl(url + "?success=true&pid=" + payment.getId())
				.setCancelUrl(url + "?canceled=true&pid=" + payment.getId())
				.addLineItem(
						SessionCreateParams.LineItem.builder()
								.setQuantity(1L)
								.setPriceData(
										SessionCreateParams.LineItem.PriceData.builder().setCurrency("inr")
												.setUnitAmount(course.getCoursePrice() * 100)
												.setProductData(ProductData.builder().setName(course.getCourseTitle())
														.setDescription(course.getCourseDescription()).addImage(course.getCourseImageUrl()).build())
												.build())
								.build())
				.build();

		Session session = Session.create(params);

		payment.setOrderId(session.getId());
		payment.setPaymentStatus(session.getPaymentStatus());
		paymentDao.save(payment);

		return session;
	}

	public Session createMembershipPackagePaymentSession(String userPrimaryKey, MembershipPackage membershipPackage)
			throws StripeException {
		Stripe.apiKey = STRIPE_SECRET_KEY;
		String currentReceipt = Utilities.generateTransactionId(6);
		String url = "http://localhost:3000/membership";

		Payment payment = new Payment();
		payment.setAmount(membershipPackage.getMembershipPrice());
		payment.setCurrency("INR");
		payment.setReceipt(currentReceipt);
		payment.setUserPrimaryKey(userPrimaryKey);
		payment = paymentDao.save(payment);

		SessionCreateParams params = SessionCreateParams.builder()
				.setMode(SessionCreateParams.Mode.PAYMENT)
				.setSuccessUrl(url + "?success=true&pid=" + payment.getId())
				.setCancelUrl(url + "?canceled=true&pid=" + payment.getId())
				.addLineItem(
						SessionCreateParams.LineItem.builder()
								.setQuantity(1L)
								.setPriceData(
										SessionCreateParams.LineItem.PriceData.builder().setCurrency("inr")
												.setUnitAmount(membershipPackage.getMembershipPrice() * 100)
												.setProductData(ProductData.builder().setName(membershipPackage.getMembershipTitle())
														.setDescription(membershipPackage.getMembershipDescription()).build())
												.build())
								.build())
				.build();

		Session session = Session.create(params);

		payment.setOrderId(session.getId());
		payment.setPaymentStatus(session.getPaymentStatus());
		paymentDao.save(payment);

		return session;
	}

	public Payment updateStatus(Long id) throws StripeException {
		Payment payment = paymentDao.findById(id).get();
		Session session = Session.retrieve(payment.getOrderId());
		payment.setPaymentStatus(session.getPaymentStatus());
		paymentDao.save(payment);
		return payment;
	}

	public List<Payment> getPayments() {
		return paymentDao.findAll();
	}
}