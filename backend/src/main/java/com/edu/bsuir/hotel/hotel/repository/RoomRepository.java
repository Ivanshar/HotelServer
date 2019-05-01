package com.edu.bsuir.hotel.hotel.repository;

import com.edu.bsuir.hotel.hotel.entity.RoomEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RoomRepository extends CrudRepository<RoomEntity, Integer> {
    List<RoomEntity> findAllByRoomType(String roomType);
}
