package com.example.demo;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.example.demo.repo.AccountRepo;
import com.example.demo.services.AccountServices;

//@Component
public class AccountElasticDatasource {

	//@Autowired
	private AccountRepo accountRepo;

	//@Autowired
	private AccountServices accountServices;

	//@Autowired
	private RestTemplate restTemplate;

	/*private static final Logger log = LoggerFactory.getLogger(AccountElasticDatasource.class);

	@EventListener(org.springframework.boot.context.event.ApplicationReadyEvent.class)
	public void populateData() {
		log.info("Start DELETE");
		var response = restTemplate.exchange("http://localhost:9200/practical-java", HttpMethod.DELETE, null,
				String.class);
		log.info("DELETE result : " + response.getBody());*/

		

		

		
	}

 
