package com.edu.bsuir.hotel.hotel.dto;

public class ReviewDTO {
    private int id;
    private byte mark;
    private String comment;
    private ReservationDTO reservation;

    public ReviewDTO() {
    }

    public ReviewDTO(int id, byte mark, String comment, ReservationDTO reservation) {
        this.id = id;
        this.mark = mark;
        this.comment = comment;
        this.reservation = reservation;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public byte getMark() {
        return mark;
    }

    public void setMark(byte mark) {
        this.mark = mark;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public ReservationDTO getReservation() {
        return reservation;
    }

    public void setReservation(ReservationDTO reservation) {
        this.reservation = reservation;
    }
}
