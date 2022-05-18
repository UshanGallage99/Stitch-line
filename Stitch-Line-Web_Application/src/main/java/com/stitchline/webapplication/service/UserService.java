package com.stitchline.webapplication.service;


import com.stitchline.webapplication.dto.UserDTO;


public interface UserService {
    String addUser(UserDTO dto);
    UserDTO searchUser(String userName);

}
