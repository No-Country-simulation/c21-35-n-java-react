package com.gamexo.backend.dto;

public record UserAuthorizedDTO(String email,
                                String message,
                                String token) {
}
