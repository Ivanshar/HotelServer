package com.edu.bsuir.hotel.hotel.controller;

import com.edu.bsuir.hotel.hotel.entity.RoomEntity;
import com.edu.bsuir.hotel.hotel.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/req")
    public ResponseEntity<RoomEntity> getRequired(@RequestBody RoomEntity roomEntity){
        List<RoomEntity> rooms = roomService.requiredRooms(roomEntity);
        if(!rooms.isEmpty()){
            return ResponseEntity.ok(rooms.get(0));
        }else {
            return ResponseEntity.ok(null);
        }
    }
}
