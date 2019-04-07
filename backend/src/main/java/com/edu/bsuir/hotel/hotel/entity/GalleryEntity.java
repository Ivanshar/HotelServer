package com.edu.bsuir.hotel.hotel.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "gallery", schema = "hoteldb", catalog = "")
public class GalleryEntity {
    private int id;
    private String photo;
    private RoomEntity room;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "photo")
    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GalleryEntity that = (GalleryEntity) o;
        return id == that.id &&
                Objects.equals(photo, that.photo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, photo);
    }

    @ManyToOne
    @JoinColumn(name = "room_id", referencedColumnName = "id", nullable = false)
    public RoomEntity getRoom() {
        return room;
    }

    public void setRoom(RoomEntity roomByRoomId) {
        this.room = roomByRoomId;
    }
}
