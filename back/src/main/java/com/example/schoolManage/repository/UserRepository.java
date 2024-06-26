package com.example.schoolManage.repository;

import com.example.schoolManage.model.user.Student;
import com.example.schoolManage.model.user.Teacher;
import com.example.schoolManage.model.user.User;

import java.util.List;
import java.util.Optional;

import com.example.schoolManage.repository.custom.UserRepositoryCustom;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId>, UserRepositoryCustom {
    Optional<User> findByUsername(String username);
    Optional<Student> findStudentByUsername(String username);
    Optional<Teacher> findTeacherByUsername(String username);
    void deleteByUsername(String username);
}
