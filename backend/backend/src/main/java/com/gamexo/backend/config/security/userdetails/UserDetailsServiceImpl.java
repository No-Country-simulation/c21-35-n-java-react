package com.gamexo.backend.config.security.userdetails;

import com.gamexo.backend.config.security.jwt.JwtUtils;
import com.gamexo.backend.dto.user.UserLoginRequest;
import com.gamexo.backend.dto.user.UserAuthorizedDTO;
import com.gamexo.backend.dto.user.UserInfoDTO;
import com.gamexo.backend.dto.user.UserRegistrationDTO;
import com.gamexo.backend.mapper.UserMapper;
import com.gamexo.backend.model.UserEntity;
import com.gamexo.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final PasswordEncoder passwordEncoder;

    private final UserRepository userRepository;

    private final UserMapper userMapper;

    private final JwtUtils jwtUtils;

    @Autowired
    public UserDetailsServiceImpl(PasswordEncoder passwordEncoder, UserRepository clientRepository, UserMapper userMapper, JwtUtils jwtUtils) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = clientRepository;
        this.userMapper = userMapper;
        this.jwtUtils = jwtUtils;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByEmail(username)
                .orElseThrow( () -> new UsernameNotFoundException("Email " + username + " not found "));

        //Get list of simpled granted authorities from Role
        List<SimpleGrantedAuthority> simpleGrantedAuthorities = new ArrayList<>();
        simpleGrantedAuthorities.add(new SimpleGrantedAuthority(("ROLE_".concat(user.getRole().name()))));

        return new User(
                user.getEmail(),
                user.getPassword(),
                true, // isEnabled
                true, // isAccountNonExpired
                true, // isCredentialsNonExpired
                true, // isAccountNonLocked
                simpleGrantedAuthorities
        );
    }


    public UserInfoDTO registerUser(UserRegistrationDTO userRegistrationDTO){
        UserEntity user = userMapper.userDtoToUser(userRegistrationDTO);
        user = userRepository.save(user);
        return userMapper.userToDto(user);
    }

    public UserAuthorizedDTO loginUser(UserLoginRequest loginRequest){

        String userName = loginRequest.email();
        String password = loginRequest.password();

        Authentication authentication = authenticate(userName, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String authority = SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream()
                .findFirst() // Get the first (and only) authority
                .map(GrantedAuthority::getAuthority)
                .orElse(""); // Return an empty string if no authority is found

        int downLineIdx = authority.indexOf("_");
        authority = authority.substring(downLineIdx + 1);



        String accessToken = jwtUtils.createToken(authentication);
        return new UserAuthorizedDTO(userName,
                "User logged sucessfully",
                accessToken,
                authority);
    }

    private Authentication authenticate(String userName, String password) {

        UserDetails userDetails = loadUserByUsername(userName);

        if(!passwordEncoder.matches(password, userDetails.getPassword())){
            throw new BadCredentialsException("Invalid password");
        }

        return new UsernamePasswordAuthenticationToken(userName, userDetails.getPassword(), userDetails.getAuthorities());

    }


}
