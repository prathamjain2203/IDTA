package com.idta.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.idta.entity.ContactForm;

@Repository
public interface ContactFormDao extends JpaRepository<ContactForm, Long> {

}
