package com.company.samplerestapi.Controller;


import com.company.samplerestapi.Services.UserService;
import com.company.samplerestapi.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    UserService userServices;



    @RequestMapping(method = RequestMethod.GET,value = "/users")
    public List<User> getAllUsers()
    {
        return userServices.getAllUsers();
    }



//GET

    @RequestMapping(method = RequestMethod.GET,value = "/user/{email}")
    public Optional<User> userInfo(@PathVariable String email)
    {
        return userServices.getUserInfo(email);

    }



//POST

    @RequestMapping(method =RequestMethod.POST,value = "/users")
    public User addUser(@RequestBody User stu)
    {
        userServices.addUser(stu);
        return stu;
    }



//    PUT
    @RequestMapping(method = RequestMethod.PUT,value = "/user/{email}")
    public Optional<User> editUser(@PathVariable String email, @RequestBody User user)
    {
        return userServices.editUser(email, user);

    }



//    Delete

    @RequestMapping(method = RequestMethod.DELETE,value = "/user/{email}")
    public Optional<User> deleteUser(@PathVariable String email)
    {
        return userServices.deleteUser(email);

    }




}
