package com.example.demo.repository;

import com.example.demo.persistence.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    // jdc todo added because version problems with github version
//    <T, ID extends Serializable> T findOne(ID var1);

    @Override
    void delete(User user);

}
