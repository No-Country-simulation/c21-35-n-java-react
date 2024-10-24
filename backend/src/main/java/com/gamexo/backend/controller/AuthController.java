package com.gamexo.backend.controller;

import com.gamexo.backend.config.UserDetailsServiceImpl;
import com.gamexo.backend.dto.UserAuthorizedDTO;
import com.gamexo.backend.dto.UserInfoDTO;
import com.gamexo.backend.dto.UserLoginRequest;
import com.gamexo.backend.dto.UserRegistrationDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserDetailsServiceImpl userDetailsService;

    @Autowired
    public AuthController(UserDetailsServiceImpl userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserInfoDTO> registerUser(@RequestBody UserRegistrationDTO userRegistrationDTO, UriComponentsBuilder uriComponentsBuilder){
        UserInfoDTO userDTO = userDetailsService.registerUser(userRegistrationDTO);
        URI url = uriComponentsBuilder.path("/users/{id}").buildAndExpand(userDTO.id()).toUri();
        return ResponseEntity.created(url).body(userDTO);
    }

    @PostMapping("/login")
    public ResponseEntity<UserAuthorizedDTO> loginUser(@RequestBody UserLoginRequest loginRequest){
        return new ResponseEntity<>(userDetailsService.loginUser(loginRequest), HttpStatus.OK);
    }


}
