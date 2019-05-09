package com.edu.bsuir.hotel.hotel.service;

import com.edu.bsuir.hotel.hotel.entity.RoomEntity;

import java.util.List;
import java.util.Optional;

public interface RoomService {
    List<RoomEntity> findAllByRoomType(String roomType);
    RoomEntity save(RoomEntity roomEntity);
    List<RoomEntity> requiredRooms(RoomEntity roomEntity);
    List<RoomEntity> findAll();
    Optional<RoomEntity> findById(int id);
}
