package com.charounkara.referenceproject.exception;

import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

@Data
public class ApiRequestException extends RuntimeException{
    private final HttpStatus httpStatus;
    private final int httpStatusCode;
    public ApiRequestException(String message, HttpStatus httpStatus) {
        super(message);
        this.httpStatus=httpStatus;
        this.httpStatusCode=httpStatus.value();
    }

    public ApiRequestException(String message, Throwable cause,HttpStatus httpStatus) {
        super(message, cause);
        this.httpStatus = httpStatus;
        this.httpStatusCode=httpStatus.value();
    }
}
