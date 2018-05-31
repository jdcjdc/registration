package com.example.demo.persistence.domain;

import com.example.demo.persistence.domain.Privilege;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RemovePrivilegeRepository extends JpaRepository<Privilege, Long> {

    Privilege findByName(String name);

    @Override
    void delete(Privilege privilege);

}
