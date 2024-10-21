package com.charounkara.referenceproject.models.entities;

import com.charounkara.referenceproject.models.enums.CurrencyType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Currency {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "currency_id")
    private Long currencyId;

    @Column(name = "name", nullable = false)
    private String name; // For example, USD, EUR, Gold, Stock

    @Column(name = "current_price", nullable = false)
    private double currentPrice; // Real-time price

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private CurrencyType type; // Can be an enum: CURRENCY, GOLD, STOCK

    // Getters, Setters, Constructors
}
