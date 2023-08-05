package com.idta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.idta.dao.JobsDao;
import com.idta.entity.Jobs;

@Service
public class JobsServices {

	@Autowired
	JobsDao jobsDao;

	public Jobs saveJob(Jobs jobs) {
		return jobsDao.save(jobs);
	}

	public List<Jobs> getAllJobs() {
		return jobsDao.findAll();
	}

}
