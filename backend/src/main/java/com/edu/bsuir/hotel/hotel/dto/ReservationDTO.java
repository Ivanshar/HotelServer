package com.edu.bsuir.hotel.hotel.dto;

import com.edu.bsuir.hotel.hotel.entity.RoomEntity;

import java.sql.Date;

public class ReservationDTO {
    private int id;
    private Date dateFrom;
    private Date dateTo;
    private int personCount;
    private UserDTO user;
    private RoomEntity room;

    public ReservationDTO() {
    }

    public ReservationDTO(int id, Date dateFrom, Date dateTo, int personCount, UserDTO user, RoomEntity roomByRoomId) {
        this.id = id;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.personCount = personCount;
        this.user = user;
        this.room = roomByRoomId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDateFrom() {
        return dateFrom;
    }

    public void setDateFrom(Date dateFrom) {
        this.dateFrom = dateFrom;
    }

    public Date getDateTo() {
        return dateTo;
    }

    public void setDateTo(Date dateTo) {
        this.dateTo = dateTo;
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

    public RoomEntity getRoom() {
        return room;
    }

    public void setRoom(RoomEntity roomByRoomId) {
        this.room = roomByRoomId;
    }
}
