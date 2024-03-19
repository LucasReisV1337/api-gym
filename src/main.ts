import User from "./@core/domain/user/entity/user";
import UserRepository from "./@core/infrastucture/repository/user/user.repository";

const user = new User("nickname", "email", "password");

const userRepo = new UserRepository();

// userRepo.create(user);
// console.log(userRepo.findAll());
// console.log(userRepo.findById("415afc46-1990-452c-82ac-991775f33cd0"));
// console.log(userRepo.findByEmail("email"));

// const userUpdated = new User("nicknameUpdated", "emailUpdated", "passwordUpdated", "415afc46-1990-452c-82ac-991775f33cd0");
// userRepo.update(userUpdated);
// console.log(userRepo.findAll());
// console.log(userRepo.findById("415afc46-1990-452c-82ac-991775f33cd0"));
// console.log(userRepo.findByEmail("emailUpdated"));

// userRepo.delete("415afc46-1990-452c-82ac-991775f33cd0");
// console.log(userRepo.findAll());
// console.log(userRepo.findById("415afc46-1990-452c-82ac-991775f33cd0"));
// console.log(userRepo.findByEmail("emailUpdated"));
