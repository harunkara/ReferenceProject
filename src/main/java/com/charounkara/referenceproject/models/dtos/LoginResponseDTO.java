package com.charounkara.referenceproject.models.dtos;

import com.charounkara.referenceproject.models.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDTO {
    private User user;
    private String jwt;
}
