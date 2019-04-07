package com.edu.bsuir.hotel.hotel.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "review", schema = "hoteldb", catalog = "")
public class ReviewEntity {
    private int id;
    private byte mark;
    private String comment;
    private ReservationEntity reservation;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "mark")
    public byte getMark() {
        return mark;
    }

    public void setMark(byte mark) {
        this.mark = mark;
    }

    @Basic
    @Column(name = "comment")
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ReviewEntity that = (ReviewEntity) o;
        return id == that.id &&
                mark == that.mark &&
                Objects.equals(comment, that.comment);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, mark, comment);
    }

    @ManyToOne
    @JoinColumn(name = "reservation_id", referencedColumnName = "id", nullable = false)
    public ReservationEntity getReservation() {
        return reservation;
    }

    public void setReservation(ReservationEntity reservationByReservationId) {
        this.reservation = reservationByReservationId;
    }
}
