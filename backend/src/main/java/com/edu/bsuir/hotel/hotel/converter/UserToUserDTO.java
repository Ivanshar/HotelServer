package com.edu.bsuir.hotel.hotel.converter;

import com.edu.bsuir.hotel.hotel.dto.UserDTO;
import com.edu.bsuir.hotel.hotel.entity.UserEntity;
import org.springframework.core.convert.converter.Converter;

public class UserToUserDTO implements Converter<UserEntity, UserDTO> {
    @Override
    public UserDTO convert(UserEntity user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setEmail(user.getEmail());
        userDTO.setLogoUrl(user.getLogoUrl());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setRole(user.getRole());
        userDTO.setMobileNumber(user.getMobileNumber());
        userDTO.setBirthDate(user.getBirthDate());
        return userDTO;
    }
}
