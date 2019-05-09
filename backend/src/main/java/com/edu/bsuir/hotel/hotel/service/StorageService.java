package com.edu.bsuir.hotel.hotel.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface StorageService {
    boolean storeEventImage(MultipartFile file);
    Resource getEventImage(String name);
}
