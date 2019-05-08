package com.edu.bsuir.hotel.hotel.controller;

import com.edu.bsuir.hotel.hotel.converter.UserToUserDTO;
import com.edu.bsuir.hotel.hotel.dto.AuthToken;
import com.edu.bsuir.hotel.hotel.dto.UserDTO;
import com.edu.bsuir.hotel.hotel.entity.UserEntity;
import com.edu.bsuir.hotel.hotel.security.TokenProvider;
import com.edu.bsuir.hotel.hotel.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/token", method = RequestMethod.POST)
    public ResponseEntity register(@RequestBody UserEntity loginUser) throws AuthenticationException {

        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginUser.getLogin(),
                        loginUser.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        final String token = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new AuthToken(token));
    }

    @RequestMapping (value = "/sign-up", method = RequestMethod.POST)
    public ResponseEntity regNewUser(@RequestBody UserEntity user){
        UserEntity userResult = userService.save(user);
        if(userResult == null) return ResponseEntity.badRequest().build();
        else return ResponseEntity.ok(userResult);
    }

    @GetMapping("/user")
    public ResponseEntity<UserDTO> authUser(Principal userInfo){
        UserToUserDTO converter = new UserToUserDTO();
        UserEntity user = userService.findByLogin(userInfo.getName());
        if(user != null){
            return ResponseEntity.ok(converter.convert(user));
        }else{
            return ResponseEntity.notFound().build();
        }
    }

}
