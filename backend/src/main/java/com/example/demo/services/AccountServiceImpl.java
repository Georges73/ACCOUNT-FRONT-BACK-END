package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.demo.model.Accounts;
import com.example.demo.repo.AccountRepo;

@Service("AccountService")
public class AccountServiceImpl implements AccountServices{
	
	@Autowired
	private AccountRepo accountRepo;
	
	
	public Optional<Accounts> findById(String id) {
		// TODO Auto-generated method stub
		return accountRepo.findById(id);
	}


	@Override
	public Iterable<Accounts> findAll() {
		// TODO Auto-generated method stub
		return accountRepo.findAll(PageRequest.of(0, 50));
		//return accountRepo.findAll();
	}


	@Override
	public Iterable<Accounts> findByFirstname(String firstname) {
		// TODO Auto-generated method stub
		return accountRepo.findByFirstnameStartingWith(firstname);
	}
	
	


	

}
