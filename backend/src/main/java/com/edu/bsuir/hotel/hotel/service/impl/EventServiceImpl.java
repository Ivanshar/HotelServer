package com.edu.bsuir.hotel.hotel.service.impl;

import com.edu.bsuir.hotel.hotel.entity.EventEntity;
import com.edu.bsuir.hotel.hotel.repository.EventRepository;
import com.edu.bsuir.hotel.hotel.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {
    @Autowired
    private EventRepository eventRepository;

    @Override
    public EventEntity save(EventEntity eventEntity) {
        return eventRepository.save(eventEntity);
    }

    @Override
    public List<EventEntity> findAll() {
        return (List<EventEntity>) eventRepository.findAll();
    }
}
