package com.gamexo.backend.dto;

import com.gamexo.backend.model.Customer;

public record CustomerDTO(
        Long id,
        String name,
        UserInfoDTO user

) {

    public CustomerDTO(Customer customer) {
        this(
                customer.getId(),
                customer.getName(),
                UserInfoDTO.fromDTO(customer.getUser())
        );
    }

    static CustomerDTO fromDTO(Customer customer) {
        return new CustomerDTO(customer);
    }
}
