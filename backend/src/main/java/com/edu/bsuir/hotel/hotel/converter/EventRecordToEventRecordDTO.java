package com.edu.bsuir.hotel.hotel.converter;

import com.edu.bsuir.hotel.hotel.dto.EventRecordDTO;
import com.edu.bsuir.hotel.hotel.entity.EventRecordEntity;
import org.springframework.core.convert.converter.Converter;

import java.util.ArrayList;
import java.util.List;

public class EventRecordToEventRecordDTO implements Converter<EventRecordEntity, EventRecordDTO> {
    private UserToUserDTO userToUserDTO = new UserToUserDTO();

    @Override
    public EventRecordDTO convert(EventRecordEntity eventEntity) {
        EventRecordDTO eventDTO = new EventRecordDTO();
        eventDTO.setId(eventEntity.getId());
        eventDTO.setPersonCount(eventEntity.getPersonCount());
        eventDTO.setUser(userToUserDTO.convert(eventEntity.getUser()));
        eventDTO.setEvent(eventEntity.getEvent());
        return eventDTO;
    }

    public List<EventRecordDTO> convert(List<EventRecordEntity> products){
        List<EventRecordDTO> list = new ArrayList<>();
        for (EventRecordEntity pro: products) {
            list.add(convert(pro));
        }
        return list;
    }
}
