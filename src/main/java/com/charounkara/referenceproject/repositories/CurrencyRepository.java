package com.charounkara.referenceproject.repositories;

import com.charounkara.referenceproject.models.entities.Currency;
import com.charounkara.referenceproject.models.enums.CurrencyType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CurrencyRepository extends JpaRepository<Currency, Long> {
    Optional<Currency> findByName(String name);
    List<Currency> findByType(CurrencyType type);
    List<Currency> findAll();
}
