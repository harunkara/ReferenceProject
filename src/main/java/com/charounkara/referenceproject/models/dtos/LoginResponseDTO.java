package com.charounkara.referenceproject.models.dtos;

import com.charounkara.referenceproject.models.dtos.Errors.ErrorResponseDTO;
import com.charounkara.referenceproject.models.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginResponseDTO {
    private User user;
    private String jwt;
}
