package com.stitchline.webapplication.service.impl;

import com.stitchline.webapplication.dto.UserDTO;
import com.stitchline.webapplication.exception.EntryDuplicateException;
import com.stitchline.webapplication.exception.NotFoundException;
import com.stitchline.webapplication.repo.UserRepo;
import com.stitchline.webapplication.service.UserService;
import com.stitchline.webapplication.util.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo repo;

    @Autowired
    private UserMapper mapper;


    @Override
    public String addUser(UserDTO dto) {
        if (!repo.existsById(dto.getUserName())) {
            return repo.save(mapper.toUser(dto)).getUserName();
        } else {
            throw new EntryDuplicateException("User is already exists");

        }
    }

    @Override
    public UserDTO searchUser(String userName) {

        UserDTO userDTO = mapper.toUserDTO(repo.findByUserName(userName));

        if (userDTO!=null) {

            return userDTO;

        } else {
            throw new NotFoundException("User not exists");

        }
    }
}
