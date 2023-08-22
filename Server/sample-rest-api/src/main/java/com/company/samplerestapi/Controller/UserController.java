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
    public List<User> getAllStudents()
    {
        return userServices.getAllUsers();
    }



//GET

    @RequestMapping(method = RequestMethod.GET,value = "/user/{email}")
    public Optional<User> stuInfo(@PathVariable String email)
    {
        return userServices.getUserInfo(email);

    }



//POST

    @RequestMapping(method =RequestMethod.POST,value = "/users")
    public User addStudent(@RequestBody User stu)
    {
        userServices.addUser(stu);
        return stu;
    }



//    PUT
    @RequestMapping(method = RequestMethod.PUT,value = "/user/{email}")
    public Optional<User> editStudent(@PathVariable String email, @RequestBody User user)
    {
        return userServices.editUser(email, user);

    }



//    Delete

    @RequestMapping(method = RequestMethod.DELETE,value = "/user/{email}")
    public Optional<User> deleteStudent(@PathVariable String email)
    {
        return userServices.deleteUser(email);

    }




}
