package com.example.demo.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.model.Accounts;
import com.example.demo.services.AccountServices;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
//@Controller
//@RequestMapping("api/accounts")
@RequestMapping("/api/")
public class AccountsController {

	// private Logger log = LoggerFactory.getLogger(AccountsController.class);

	@Autowired
	private AccountServices accountService;

	@GetMapping("findById{id}")
	@ResponseBody
	public Optional<Accounts> findById(@RequestParam( value = "id", required = true )  String id) {

		System.err.println("--------------ID--------------------");
		return accountService.findById(id);
	}

	@GetMapping(value = "findByFName{firstname}")
	@ResponseBody
	public Iterable<Accounts> findByFirstName(@RequestParam String firstname) {

		System.err.println("-----------------findByFirstName  ");

		// Gson gson = new Gson();

		return accountService.findByFirstname(firstname);
	}

	 

	@GetMapping(value = "/findAll")
	public @ResponseBody Iterable<Accounts> findAll()  {

		System.err.println("----------------------findall-----------------------");
		
		Iterable<Accounts> iterable = accountService.findAll();
		
		List<Accounts> result = 
				  StreamSupport.stream(iterable.spliterator(), false)
				    .collect(Collectors.toList());

		return result;
	}

}