package com.charounkara.referenceproject.models.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Asset {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long assetId;

    @ManyToOne
    @JoinColumn(name = "user_id") // Create a foreign key column "user_id" in the Asset table
    private User ownerUser;

    @ManyToOne
    @JoinColumn(name = "currency_id")
    private Currency currency; // Represents which currency, gold, or stock

    private double quantity; // How many units/amount purchased
    private double purchasePrice; // Purchase price

    // Getters, Setters, Constructors
}