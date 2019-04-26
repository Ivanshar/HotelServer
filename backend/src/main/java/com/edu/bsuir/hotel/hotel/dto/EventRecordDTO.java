package com.edu.bsuir.hotel.hotel.dto;

import com.edu.bsuir.hotel.hotel.entity.EventEntity;

import java.sql.Timestamp;

public class EventRecordDTO {
    private int id;
    private Timestamp timeFrom;
    private Timestamp timeTo;
    private UserDTO user;
    private EventEntity event;

    public EventRecordDTO() {
    }

    public EventRecordDTO(int id, Timestamp timeFrom, Timestamp timeTo, UserDTO user, EventEntity event) {
        this.id = id;
        this.timeFrom = timeFrom;
        this.timeTo = timeTo;
        this.user = user;
        this.event = event;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Timestamp getTimeFrom() {
        return timeFrom;
    }

    public void setTimeFrom(Timestamp timeFrom) {
        this.timeFrom = timeFrom;
    }

    public Timestamp getTimeTo() {
        return timeTo;
    }

    public void setTimeTo(Timestamp timeTo) {
        this.timeTo = timeTo;
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
