package com.charounkara.referenceproject.controllers;

import com.charounkara.referenceproject.models.entities.Currency;
import com.charounkara.referenceproject.repositories.CurrencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
        @RequestMapping("/currency")
@CrossOrigin("*")
public class CurrencyController {
    @Autowired
    private CurrencyRepository currencyRepository;
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllCurrencies(){
        List<Currency> allCurrencies=currencyRepository.findAll();
        return ResponseEntity.ok(allCurrencies);
    }
}
