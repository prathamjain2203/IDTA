package com.idta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idta.entity.Jobs;
import com.idta.services.JobsServices;

@RestController
@RequestMapping("/jobs")
public class JobsController {

	@Autowired
	JobsServices jobsServices;

	@GetMapping("/applications")
	public List<Jobs> getAllJobs() {
		return jobsServices.getAllJobs();
	}

	@PostMapping("/saveJobApplication")
	public Jobs saveJob(@RequestBody Jobs job) {
		return jobsServices.saveJob(job);
	}

}
