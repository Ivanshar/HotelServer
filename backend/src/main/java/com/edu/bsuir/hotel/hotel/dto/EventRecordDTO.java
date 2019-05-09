package com.edu.bsuir.hotel.hotel.dto;

import com.edu.bsuir.hotel.hotel.entity.EventEntity;

public class EventRecordDTO {
    private int id;
    private int personCount;
    private UserDTO user;
    private EventEntity event;

    public EventRecordDTO() {
    }

    public EventRecordDTO(int id, int personCount, UserDTO user, EventEntity event) {
        this.id = id;
        this.personCount = personCount;
        this.user = user;
        this.event = event;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPersonCount() {
        return personCount;
    }

    public void setPersonCount(int personCount) {
        this.personCount = personCount;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public EventEntity getEvent() {
        return event;
    }

    public void setEvent(EventEntity event) {
        this.event = event;
    }
}
