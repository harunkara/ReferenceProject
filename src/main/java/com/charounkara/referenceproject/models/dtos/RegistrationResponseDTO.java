package com.charounkara.referenceproject.models.dtos;

import com.charounkara.referenceproject.models.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RegistrationResponseDTO {
    private User user;
    private String jwt;
}
