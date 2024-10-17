package com.charounkara.referenceproject.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZoneId;
import java.time.ZonedDateTime;
@ControllerAdvice
public class ApiExceptionHandler {
    @ExceptionHandler(value = {ApiRequestException.class})
    public ResponseEntity<Object> handleApiRequestException(ApiRequestException apiRequestException){
        HttpStatus badRequest=HttpStatus.BAD_REQUEST;
        ApiException apiException=new ApiException(
            apiRequestException.getMessage(),
            apiRequestException.getHttpStatus(),
            ZonedDateTime.now(ZoneId.of("Z")),apiRequestException.getHttpStatusCode());
        return new ResponseEntity<>(apiException,badRequest);
    }
}
