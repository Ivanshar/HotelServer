package com.edu.bsuir.hotel.hotel.controller;

import com.edu.bsuir.hotel.hotel.entity.ReservationEntity;
import com.edu.bsuir.hotel.hotel.entity.RoomEntity;
import com.edu.bsuir.hotel.hotel.service.ReservationService;
import com.edu.bsuir.hotel.hotel.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;
    @Autowired
    private RoomService roomService;

    @PostMapping("")
    private ResponseEntity saveReservation(@RequestBody ReservationEntity reservationEntity){
        RoomEntity entity = reservationEntity.getRoom();
        entity.setIsActive((byte)0);
        roomService.save(entity);

        ReservationEntity res = reservationService.save(reservationEntity);
        if(res != null) {
            return ResponseEntity.ok().build();
        }else {
            return ResponseEntity.badRequest().build();
        }
    }
}
