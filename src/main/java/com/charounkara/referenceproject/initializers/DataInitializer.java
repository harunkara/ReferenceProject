package com.charounkara.referenceproject.initializers;

import com.charounkara.referenceproject.models.entities.Asset;
import com.charounkara.referenceproject.models.entities.Role;
import com.charounkara.referenceproject.models.entities.User;
import com.charounkara.referenceproject.repositories.RoleRepository;
import com.charounkara.referenceproject.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class DataInitializer {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    @Autowired
    public DataInitializer(RoleRepository roleRepository, UserRepository userRepository) {
        this.roleRepository = roleRepository;
        this.userRepository=userRepository;
    }

    @Bean
    public CommandLineRunner run() {

        return args -> {
            List<Role> roles = new ArrayList<>();
            roles.add(new Role("USER"));
            roles.add(new Role("ADMIN"));
            //Adding Roles ADMIN and USER
            roles.forEach(role -> {
                if (roleRepository.findByAuthority(role.getAuthority()).isEmpty()) {
                    roleRepository.save(role);
                }
            });
        };
    }
}
