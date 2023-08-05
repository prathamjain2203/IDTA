package com.idta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.idta.entity.ErrorObject;
import com.idta.entity.Payment;
import com.idta.entity.CourseEntity.Courses;
import com.idta.services.CoursesServices;
import com.idta.services.PaymentService;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;

@RestController
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	PaymentService paymentService;
	@Autowired
	CoursesServices coursesServices;

	@PostMapping("/generateOrder/{userPrimaryKey}/{amount}")
	public ResponseEntity<Object> makePayment(@PathVariable String userPrimaryKey, @PathVariable Long amount)
			throws RazorpayException {
		Payment payment = paymentService.generateOrder(userPrimaryKey, amount);
		if (payment == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new ErrorObject("/payment/generateOrder", "Bad Request", "Email Already Taken", "400"));
		} else {
			return ResponseEntity.ok(payment);
		}
	}

	@PostMapping("/savePayment")
	public ResponseEntity<Object> makePayment(@RequestBody Payment payment) {
		Payment savePayment = paymentService.savePayment(payment);
		if (savePayment == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new ErrorObject("/payment/savePayment", "Bad Request", "Email Already Taken", "400"));
		} else {
			return ResponseEntity.ok(savePayment);
		}
	}

	@GetMapping("/getPaymentByOrderId")
	public ResponseEntity<Object> getPaymentByOrderId(@PathVariable String orderId) {
		Payment payment = paymentService.getPaymentByOrderId(orderId);
		if (payment == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(new ErrorObject("/payment/getPaymentByOrderId", "Bad Request", "Email Already Taken", "400"));
		} else {
			return ResponseEntity.ok(payment);
		}
	}

	// stripe
	@GetMapping("/create-payment-session/{userPrimaryKey}/{coursePrimaryKey}")
	public RedirectView createSession(@PathVariable String userPrimaryKey, @PathVariable String coursePrimaryKey)
			throws StripeException {
		Courses course = coursesServices.getCourse(coursePrimaryKey);
		Session session = paymentService.createSession(userPrimaryKey, course);
		return new RedirectView(session.getUrl());
	}

	@PutMapping("/{id}/status")
	public ResponseEntity<Object> updateStatus(@PathVariable Long id) throws StripeException {
		Payment payment = paymentService.updateStatus(id);
		return ResponseEntity.ok(payment);
	}
}
