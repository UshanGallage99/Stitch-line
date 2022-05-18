package com.stitchline.webapplication.repo;

import com.stitchline.webapplication.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepo extends MongoRepository<User,String> {
        User findByUserName(String userName);
}
