package com.idta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idta.entity.ContactForm;
import com.idta.services.ContactFormService;

@RestController
@RequestMapping("/contact")
public class ContactFormController {

	@Autowired
	ContactFormService contactFormService;

	@GetMapping("/getAllContacts")
	public List<ContactForm> getAllContacts() {
		return contactFormService.getAllContacts();
	}

	@PostMapping("/saveContact")
	public ContactForm saveContact(@RequestBody ContactForm contactForm) {
		return contactFormService.saveContact(contactForm);
	}

}
