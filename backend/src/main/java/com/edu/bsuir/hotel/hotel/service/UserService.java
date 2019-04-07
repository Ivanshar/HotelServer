package com.edu.bsuir.hotel.hotel.service;

import com.edu.bsuir.hotel.hotel.entity.UserEntity;

public interface UserService {
    UserEntity findByLogin(String login);
}
