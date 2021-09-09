package com.softvendas.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softvendas.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
