package com.gamexo.backend.mapper;

import com.gamexo.backend.dto.UserInfoDTO;
import com.gamexo.backend.dto.UserRegistrationDTO;
import com.gamexo.backend.model.UserEntity;
import com.gamexo.backend.model.enums.Role;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.mapstruct.Named;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING,
        imports = Role.class)
public interface UserMapper {

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Mapping(target = "role", expression = "java(Role.CLIENT)")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "password", source = "password", qualifiedByName = "mapPassword")
    UserEntity userDtoToUser(UserRegistrationDTO userRegistrationDTO);

    UserInfoDTO userToDto(UserEntity user);

    @Named("mapPassword")
    default String mapPassword(String password){
        return passwordEncoder.encode(password);
    }

}
