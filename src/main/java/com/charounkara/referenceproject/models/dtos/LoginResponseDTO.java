package com.charounkara.referenceproject.models.dtos;

import com.charounkara.referenceproject.models.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponseDTO {
    private User user;
    private String jwt;
    public LoginResponseDTO(){
        super();
    }

}
