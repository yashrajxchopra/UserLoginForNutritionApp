package com.company.samplerestapi.Repository;

import com.company.samplerestapi.Model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,String>
{

}
