package com.idta.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.idta.entity.Jobs;

@Repository
public interface JobsDao extends JpaRepository<Jobs, Long> {

}
