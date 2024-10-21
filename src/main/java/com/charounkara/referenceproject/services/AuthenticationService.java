package com.charounkara.referenceproject.services;

import java.util.HashSet;
import java.util.Set;

import com.charounkara.referenceproject.exception.ApiRequestException;
import com.charounkara.referenceproject.models.dtos.LoginResponseDTO;
import com.charounkara.referenceproject.models.dtos.RegistrationResponseDTO;
import com.charounkara.referenceproject.models.entities.Role;
import com.charounkara.referenceproject.models.entities.User;
import com.charounkara.referenceproject.repositories.RoleRepository;
import com.charounkara.referenceproject.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

        public RegistrationResponseDTO registerUser(String username, String password){
            if(username.isBlank()|password.isBlank()){
                throw new ApiRequestException("Kullanıcı adı veya şifre boş!", HttpStatus.BAD_REQUEST);
            }
            if(userRepository.findByUsername(username).isPresent()){
                throw new ApiRequestException("Bu kullanıcı adı daha önce kullanıldı!",HttpStatus.CONFLICT);
            }
            String encodedPassword = passwordEncoder.encode(password);
            Role userRole = roleRepository.findByAuthority("USER").get();

            Set<Role> authorities = new HashSet<>();

            authorities.add(userRole);
            User tempUser=new User(username, encodedPassword,authorities,3000.0);
            userRepository.save(tempUser);
            Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
            );
            String token = tokenService.generateJwt(auth);
            return new RegistrationResponseDTO(tempUser, token);


    }

    public LoginResponseDTO loginUser(String username, String password){
            if(username.isBlank()|password.isBlank()){
                throw new ApiRequestException("Kullanıcı adı veya şifre eksik!", HttpStatus.BAD_REQUEST);
            }
            try{
                Authentication auth = authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(username, password)
                );

                String token = tokenService.generateJwt(auth);

                return new LoginResponseDTO(userRepository.findByUsername(username).get(), token);
            }catch (Exception exception){
                throw new ApiRequestException("Kullanıcı adı veya şifre yanlış",HttpStatus.BAD_REQUEST);
            }

    }

}