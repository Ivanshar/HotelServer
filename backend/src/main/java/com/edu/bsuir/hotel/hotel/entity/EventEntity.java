package com.edu.bsuir.hotel.hotel.entity;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "event", schema = "hoteldb", catalog = "")
public class EventEntity {
    private int id;
    private String name;
    private String description;
    private Timestamp dateTimeStart;
    private Timestamp dateTimeEnd;
    private int price;
    private int maxPersons;
    private String logoUrl;
    private EventTypeEntity eventType;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "date_time_start")
    public Timestamp getDateTimeStart() {
        return dateTimeStart;
    }

    public void setDateTimeStart(Timestamp dateTimeStart) {
        this.dateTimeStart = dateTimeStart;
    }

    @Basic
    @Column(name = "date_time_end")
    public Timestamp getDateTimeEnd() {
        return dateTimeEnd;
    }

    public void setDateTimeEnd(Timestamp dateTimeEnd) {
        this.dateTimeEnd = dateTimeEnd;
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
    @Column(name = "max_persons")
    public int getMaxPersons() {
        return maxPersons;
    }

    public void setMaxPersons(int maxPersons) {
        this.maxPersons = maxPersons;
    }

    @Basic
    @Column(name = "logo_url")
    public String getLogoUrl() {
        return logoUrl;
    }

    public void setLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EventEntity that = (EventEntity) o;
        return id == that.id &&
                price == that.price &&
                maxPersons == that.maxPersons &&
                Objects.equals(name, that.name) &&
                Objects.equals(description, that.description) &&
                Objects.equals(dateTimeStart, that.dateTimeStart) &&
                Objects.equals(dateTimeEnd, that.dateTimeEnd) &&
                Objects.equals(logoUrl, that.logoUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, dateTimeStart, dateTimeEnd, price, maxPersons, logoUrl);
    }

    @ManyToOne
    @JoinColumn(name = "event_type_id", referencedColumnName = "id", nullable = false)
    public EventTypeEntity getEventType() {
        return eventType;
    }

    public void setEventType(EventTypeEntity eventTypeByEventTypeId) {
        this.eventType = eventTypeByEventTypeId;
    }
}
