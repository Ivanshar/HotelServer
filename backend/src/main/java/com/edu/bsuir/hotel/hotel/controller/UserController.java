package com.edu.bsuir.hotel.hotel.controller;

import com.edu.bsuir.hotel.hotel.converter.UserToUserDTO;
import com.edu.bsuir.hotel.hotel.dto.UserDTO;
import com.edu.bsuir.hotel.hotel.entity.UserEntity;
import com.edu.bsuir.hotel.hotel.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    private UserToUserDTO userConverter = new UserToUserDTO();

    @RequestMapping(value = "/login/{login}", method = RequestMethod.GET)
    public UserEntity getUserByLogin(@PathVariable(name = "login") String login){
        return userService.findByLogin(login);
    }

    @RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
    public ResponseEntity<UserDTO> getUserById(@PathVariable int id){
        Optional<UserEntity> userEntity = userService.findById(id);
        if(userEntity.isPresent()){
            UserDTO userDTO = userConverter.convert(userEntity.get());
            return ResponseEntity.ok(userDTO);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(value = "/login/{login}/ex", method = RequestMethod.GET)
    public ResponseEntity<Boolean> ifUserExistsByLogin(@PathVariable String login){
        UserEntity userEntity = userService.findByLogin(login);
        if(userEntity != null){
            return ResponseEntity.ok(true);
        }else {
            return ResponseEntity.ok(false);
        }
    }

    @RequestMapping(value = "/email/{email}", method = RequestMethod.GET)
    public ResponseEntity<Boolean> ifUserExistsByEmail(@PathVariable String email){
        UserEntity userEntity = userService.findByEmail(email);
        if(userEntity != null){
            return ResponseEntity.ok(true);
        }else {
            return ResponseEntity.ok(false);
        }
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public ResponseEntity saveNewUser(@RequestBody UserEntity userEntity){
        UserEntity userEntity1 = userService.save(userEntity);
        if(userEntity1 != null){
            return ResponseEntity.ok().build();
        }else {
            return ResponseEntity.badRequest().build();
        }
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public ResponseEntity<List<UserDTO>> getUsersList(){
        List<UserEntity> userEntities = userService.findAll();
        if(!userEntities.isEmpty()){
            List<UserDTO> userDTOS = userConverter.convert(userEntities);
            return ResponseEntity.ok(userDTOS);
        }else {
            return ResponseEntity.ok(null);
        }
    }
}
