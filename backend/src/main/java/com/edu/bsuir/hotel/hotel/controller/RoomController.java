package com.edu.bsuir.hotel.hotel.controller;

import com.edu.bsuir.hotel.hotel.entity.RoomEntity;
import com.edu.bsuir.hotel.hotel.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {
    @Autowired
    private RoomService roomService;

    @GetMapping("/type/{type}")
    public List<RoomEntity> getRoomByType(@PathVariable String type){
        return roomService.findAllByRoomType(type);
    }

    @PostMapping("")
    public RoomEntity saveRoom(@RequestBody RoomEntity roomEntity){
        return roomService.save(roomEntity);
    }
}
