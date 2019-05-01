package com.edu.bsuir.hotel.hotel.controller;

import com.edu.bsuir.hotel.hotel.entity.RoomEntity;
import com.edu.bsuir.hotel.hotel.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {
    @Autowired
    private RoomService roomService;

    @RequestMapping(value = "/type/{type}", method = RequestMethod.GET)
    public List<RoomEntity> getRoomByType(@PathVariable String type){
        return roomService.findAllByRoomType(type);
    }
}
