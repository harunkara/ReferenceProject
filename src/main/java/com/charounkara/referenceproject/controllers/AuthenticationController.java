package com.charounkara.referenceproject.controllers;

import com.charounkara.referenceproject.models.dtos.Errors.ErrorResponseDTO;
import com.charounkara.referenceproject.models.dtos.LoginResponseDTO;
import com.charounkara.referenceproject.models.dtos.RegistrationDTO;
import com.charounkara.referenceproject.models.entities.User;
import com.charounkara.referenceproject.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public User registerUser(@RequestBody RegistrationDTO body){
        return authenticationService.registerUser(body.getUsername(), body.getPassword());
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody RegistrationDTO body){
        LoginResponseDTO response= authenticationService.loginUser(body.getUsername(), body.getPassword());
        if(response.getUser()!=null){
            return ResponseEntity.ok(response);
        }else{
            ErrorResponseDTO errorResponse = new ErrorResponseDTO(
                    HttpStatus.UNAUTHORIZED.value(),
                    "100",
                    "User not found or wrong username"
            );
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
        }
    }
}