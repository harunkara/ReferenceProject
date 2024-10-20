package com.charounkara.referenceproject;

import com.charounkara.referenceproject.models.entities.Role;
import com.charounkara.referenceproject.models.entities.User;
import com.charounkara.referenceproject.repositories.RoleRepository;
import com.charounkara.referenceproject.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ReferenceprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReferenceprojectApplication.class, args);
	}
}
