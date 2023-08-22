package com.company.samplerestapi.Services;

import com.company.samplerestapi.Model.User;
import com.company.samplerestapi.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    List<User> users = new ArrayList<>();
    public List<User> getAllUsers() {

        userRepository.findAll().forEach(user -> users.add(user));
        return users;
    }

    public Optional<User> getUserInfo(String email) {
        return userRepository.findById(email);
    }
    public void addUser(User user) {
        userRepository.save(user);
    }
    public Optional<User> editUser(String email, User updateduser)
    {
            userRepository.deleteById(email);
            userRepository.save(updateduser);
            return userRepository.findById(email);

    }

    public  Optional<User> deleteUser(String email)
    {
        Optional<User> delusu= userRepository.findById(email);
        userRepository.deleteById(email);
        return delusu;
    }





}
