package com.charounkara.referenceproject.services;

import com.charounkara.referenceproject.models.entities.Currency;
import com.charounkara.referenceproject.repositories.CurrencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CurrencyService {
    @Autowired
    private CurrencyRepository currencyRepository;
    public List<Currency> findAll(){
        return currencyRepository.findAll();
    }
}
