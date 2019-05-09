package com.edu.bsuir.hotel.hotel.service;

import com.edu.bsuir.hotel.hotel.entity.ReservationEntity;
import com.edu.bsuir.hotel.hotel.entity.ReviewEntity;

import java.util.List;

public interface ReviewService {
    ReviewEntity save(ReviewEntity entity);
    List<ReviewEntity> findAll();
    ReviewEntity findByReservations(List<ReservationEntity> list);
}
