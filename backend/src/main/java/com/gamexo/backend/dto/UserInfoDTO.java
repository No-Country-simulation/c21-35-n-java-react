package com.gamexo.backend.dto;

import com.gamexo.backend.model.UserEntity;

public record UserInfoDTO(Long id, String customerName, String email, String role, String accessToken) {
    public UserInfoDTO(UserEntity user) {
        this(
                user.getId(),
                user.getCustomer().getName(),
                user.getEmail(),
                user.getRole().name(),
                null
        );


    }

    static UserInfoDTO fromDTO(UserEntity user) {
        return new UserInfoDTO(user);
    }
}
