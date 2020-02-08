package com.example.demo.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.model.Accounts;

@Service
public interface AccountServices {
	
	Optional<Accounts> findById(String id);

	Iterable<Accounts> findAll();

	Iterable<Accounts> findByFirstname(String firstname);
	
	
}
