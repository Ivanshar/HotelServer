package com.edu.bsuir.hotel.hotel.converter;

import com.edu.bsuir.hotel.hotel.dto.ReservationDTO;
import com.edu.bsuir.hotel.hotel.entity.ReservationEntity;
import org.springframework.core.convert.converter.Converter;

import java.util.ArrayList;
import java.util.List;

public class ReservationToReservationDTO implements Converter<ReservationEntity, ReservationDTO> {
    private UserToUserDTO userToUserDTO = new UserToUserDTO();

    @Override
    public ReservationDTO convert(ReservationEntity resEntity) {
        ReservationDTO resDTO = new ReservationDTO();
        resDTO.setId(resEntity.getId());
        resDTO.setDateFrom(resEntity.getDateFrom());
        resDTO.setDateTo(resEntity.getDateTo());
        resDTO.setPersonCount(resEntity.getPersonCount());
        resDTO.setUser(userToUserDTO.convert(resEntity.getUser()));
        resDTO.setRoom(resEntity.getRoom());
        return resDTO;
    }

    public List<ReservationDTO> convert(List<ReservationEntity> products){
        List<ReservationDTO> list = new ArrayList<>();
        for (ReservationEntity pro: products) {
            list.add(convert(pro));
        }
        return list;
    }
}
