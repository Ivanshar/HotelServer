package com.edu.bsuir.hotel.hotel.converter;

import com.edu.bsuir.hotel.hotel.dto.ReviewDTO;
import com.edu.bsuir.hotel.hotel.entity.ReviewEntity;
import org.springframework.core.convert.converter.Converter;

import java.util.ArrayList;
import java.util.List;

public class ReviewToReviewDTO implements Converter<ReviewEntity, ReviewDTO> {
    private ReservationToReservationDTO resConverter = new ReservationToReservationDTO();

    @Override
    public ReviewDTO convert(ReviewEntity entity) {
        ReviewDTO dto = new ReviewDTO();
        dto.setId(entity.getId());
        dto.setComment(entity.getComment());
        dto.setMark(entity.getMark());
        dto.setReservation(resConverter.convert(entity.getReservation()));
        return dto;
    }

    public List<ReviewDTO> convert(List<ReviewEntity> products){
        List<ReviewDTO> list = new ArrayList<>();
        for (ReviewEntity pro: products) {
            list.add(convert(pro));
        }
        return list;
    }
}
