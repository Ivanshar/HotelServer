package com.edu.bsuir.hotel.hotel.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "event_record", schema = "hoteldb", catalog = "")
public class EventRecordEntity {
    private int id;
    private int personCount;
    private UserEntity user;
    private EventEntity event;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "person_count")
    public int getPersonCount() {
        return personCount;
    }

    public void setPersonCount(int personCount) {
        this.personCount = personCount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EventRecordEntity that = (EventRecordEntity) o;
        return id == that.id &&
                personCount == that.personCount;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, personCount);
    }

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "id", nullable = false)
    public EventEntity getEvent() {
        return event;
    }

    public void setEvent(EventEntity event) {
        this.event = event;
    }
}
