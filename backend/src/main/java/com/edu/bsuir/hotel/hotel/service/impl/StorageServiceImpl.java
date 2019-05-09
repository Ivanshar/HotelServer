package com.edu.bsuir.hotel.hotel.service.impl;

import com.edu.bsuir.hotel.hotel.service.StorageService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class StorageServiceImpl implements StorageService {
    private Path rootLocation = Paths.get("backend/src/main/resources/images");

    @Override
    public boolean storeEventImage(MultipartFile file) {
        try{
            Path productPath = Paths.get(rootLocation+"/events/"+file.getOriginalFilename()).toAbsolutePath();
            Files.copy(file.getInputStream(), productPath);
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public Resource getEventImage(String name) {
        try {
            Path file = Paths.get(rootLocation+"/events/"+name);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("FAIL!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("FAIL!");
        }
    }
}
