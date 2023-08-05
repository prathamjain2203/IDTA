package com.idta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.idta.dao.ContactFormDao;
import com.idta.entity.ContactForm;

@Service
public class ContactFormService {

	@Autowired
	ContactFormDao contactFormDao;

	public List<ContactForm> getAllContacts() {
		return contactFormDao.findAll();
	}

	public ContactForm saveContact(ContactForm contactForm) {
		return contactFormDao.save(contactForm);
	}

}
