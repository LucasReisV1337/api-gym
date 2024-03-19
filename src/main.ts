import User from "./@core/domain/user/entity/user";
import UserRepository from "./@core/infrastucture/repository/user/user.repository";

const user = new User("nickname", "email", "password");

const userRepo = new UserRepository();


console.log(userRepo.findAll())
