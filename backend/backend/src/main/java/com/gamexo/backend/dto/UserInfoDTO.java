package com.gamexo.backend.dto;

public record UserInfoDTO(Long id,
                          String name,
                          String email,
                          String password,
                          String role){
}
