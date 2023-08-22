package com.company.samplerestapi.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "email")
    private String email;
    @Column(name = "phoneno")
    private long phoneno;

    @Column(name = "name")
    private String name;

    @Column(name = "pwd")
    private String pwd;
    @Column(name = "dob")
    private String dob;
    @Column(name = "gender")
    private char gender;

    public User() {
    }

    public User(String name, long phoneno, String email, String pwd, String dob, char gender) {
        this.name = name;
        this.email = email;
        this.pwd = pwd;
        this.dob = dob;
        this.gender = gender;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public long getPhoneno() {
        return phoneno;
    }

    public void setPhoneno(long phoneno) {
        this.phoneno = phoneno;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }
}
