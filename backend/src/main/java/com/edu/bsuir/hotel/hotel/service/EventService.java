package com.edu.bsuir.hotel.hotel.service;

import com.edu.bsuir.hotel.hotel.entity.EventEntity;

import java.util.List;

public interface EventService {
    EventEntity save(EventEntity eventEntity);
    List<EventEntity> findAll();
}
