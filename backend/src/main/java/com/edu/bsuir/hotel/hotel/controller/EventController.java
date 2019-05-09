package com.edu.bsuir.hotel.hotel.controller;

import com.edu.bsuir.hotel.hotel.entity.EventEntity;
import com.edu.bsuir.hotel.hotel.service.EventService;
import com.edu.bsuir.hotel.hotel.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {
    @Autowired
    private EventService eventService;
    @Autowired
    private StorageService storageService;

    @PostMapping("")
    public EventEntity save(@RequestBody EventEntity eventEntity){
        Timestamp timestamp1 = eventEntity.getDateTimeStart();
        Timestamp timestamp2 = eventEntity.getDateTimeEnd();
        Calendar cal = Calendar.getInstance();
        cal.setTimeInMillis(timestamp1.getTime());
        cal.add(Calendar.HOUR, -3);
        timestamp1 = new Timestamp(cal.getTime().getTime());
        cal.setTimeInMillis(timestamp2.getTime());
        cal.add(Calendar.HOUR, -3);
        timestamp2 = new Timestamp(cal.getTime().getTime());

        eventEntity.setDateTimeStart(timestamp1);
        eventEntity.setDateTimeEnd(timestamp2);

        return eventService.save(eventEntity);
    }

    @GetMapping("/list")
    public List<EventEntity> getAll(){
        return eventService.findAll();
    }

    @PostMapping("/image")
    public ResponseEntity saveProductImage(@RequestParam("image") MultipartFile file){
        if(storageService.storeEventImage(file)){
            return ResponseEntity.ok().build();
        }else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/image/{name}")
    public ResponseEntity<Resource> getProductImage(@PathVariable String name){
        Resource res = storageService.getEventImage(name);
        if(res != null){
            return ResponseEntity.ok(res);
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
