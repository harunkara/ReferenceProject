package com.charounkara.referenceproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class ReferenceprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReferenceprojectApplication.class, args);
	}
}
