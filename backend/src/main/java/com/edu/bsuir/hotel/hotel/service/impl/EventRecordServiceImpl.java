package com.edu.bsuir.hotel.hotel.service.impl;

import com.edu.bsuir.hotel.hotel.repository.EventRecordRepository;
import com.edu.bsuir.hotel.hotel.service.EventRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventRecordServiceImpl implements EventRecordService {
    @Autowired
    private EventRecordRepository eventRecordRepository;
}
