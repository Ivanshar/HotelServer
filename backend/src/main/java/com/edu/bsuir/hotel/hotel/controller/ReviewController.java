package com.edu.bsuir.hotel.hotel.controller;

import com.edu.bsuir.hotel.hotel.converter.ReviewToReviewDTO;
import com.edu.bsuir.hotel.hotel.dto.ReviewDTO;
import com.edu.bsuir.hotel.hotel.entity.ReviewEntity;
import com.edu.bsuir.hotel.hotel.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    private ReviewToReviewDTO revConverter = new ReviewToReviewDTO();

    @GetMapping("/last")
    public List<ReviewDTO> getLast3(){
        ArrayList<ReviewEntity> arrayList = (ArrayList<ReviewEntity>) reviewService.findAll();
        if(arrayList != null){
            if(arrayList.size() >= 3){
                arrayList = (ArrayList<ReviewEntity>)arrayList.subList(arrayList.size()-4, arrayList.size()-1);
                return revConverter.convert(arrayList);
            }else {
                return revConverter.convert(arrayList);
            }
        }else {
            return null;
        }
    }
}
