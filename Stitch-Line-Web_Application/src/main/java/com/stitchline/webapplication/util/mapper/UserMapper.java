package com.stitchline.webapplication.util.mapper;

import com.stitchline.webapplication.dto.UserDTO;
import com.stitchline.webapplication.entity.User;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserDTO userDTO);
    UserDTO toUserDTO(User user);
    List<UserDTO> pageToUserDTO(Page<User> users);
    List<User> toUserAll(List<UserDTO> userDTOS);
}
