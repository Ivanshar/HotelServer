package com.edu.bsuir.hotel.hotel.repository;

import com.edu.bsuir.hotel.hotel.entity.ReservationEntity;
import org.springframework.data.repository.CrudRepository;


public interface ReservationRepository extends CrudRepository<ReservationEntity, Long> {
}
