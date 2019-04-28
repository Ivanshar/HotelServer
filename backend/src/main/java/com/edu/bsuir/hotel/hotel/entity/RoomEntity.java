package com.edu.bsuir.hotel.hotel.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "room", schema = "hoteldb", catalog = "")
public class RoomEntity {
    private int id;
    private int price;
    private String roomType;
    private int maxPersons;
    private byte isActive;
    private byte hasBabyBed;
    private byte hasTv;
    private byte hasBath;
    private byte hasFridge;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "price")
    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Basic
    @Column(name = "room_type")
    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    @Basic
    @Column(name = "max_persons")
    public int getMaxPersons() {
        return maxPersons;
    }

    public void setMaxPersons(int maxPersons) {
        this.maxPersons = maxPersons;
    }

    @Basic
    @Column(name = "is_active")
    public byte getIsActive() {
        return isActive;
    }

    public void setIsActive(byte isActive) {
        this.isActive = isActive;
    }

    @Basic
    @Column(name = "has_baby_bed")
    public byte getHasBabyBed() {
        return hasBabyBed;
    }

    public void setHasBabyBed(byte hasBabyBed) {
        this.hasBabyBed = hasBabyBed;
    }

    @Basic
    @Column(name = "has_tv")
    public byte getHasTv() {
        return hasTv;
    }

    public void setHasTv(byte hasTv) {
        this.hasTv = hasTv;
    }

    @Basic
    @Column(name = "has_bath")
    public byte getHasBath() {
        return hasBath;
    }

    public void setHasBath(byte hasBath) {
        this.hasBath = hasBath;
    }

    @Basic
    @Column(name = "has_fridge")
    public byte getHasFridge() {
        return hasFridge;
    }

    public void setHasFridge(byte hasFridge) {
        this.hasFridge = hasFridge;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RoomEntity that = (RoomEntity) o;
        return id == that.id &&
                price == that.price &&
                maxPersons == that.maxPersons &&
                isActive == that.isActive &&
                hasBabyBed == that.hasBabyBed &&
                hasTv == that.hasTv &&
                hasBath == that.hasBath &&
                hasFridge == that.hasFridge &&
                Objects.equals(roomType, that.roomType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, price, roomType, maxPersons, isActive, hasBabyBed, hasTv, hasBath, hasFridge);
    }
}
