package com.example.demo.repository;

import com.example.demo.dto.UserDto;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface RegistrationRepository extends Repository {
    void delete(UserDto registration);

    List findAll();

    UserDto findOne(int id);

    UserDto save(UserDto registration);


}
