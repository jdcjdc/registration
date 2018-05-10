package com.example.demo.security;

public interface SecurityUserService {
    String validatePasswordResetToken(long id, String token);
}
