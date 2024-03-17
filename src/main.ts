import Exercise from "./@core/domain/exercise/entity/exercise";
import Trainning from "./@core/domain/trainning/entity/trainning";

import User from "./@core/domain/user/entity/user";
import UserRepository from "./@core/infrastucture/repository/user/user.repository";

const user = new User("nickname", "email", "password");

const exercise = new Exercise(
  "Supino Reto",
  "description",
  "category",
  60,
  10,
  10,
  10,
  "1"
);

const exercise2 = new Exercise(
  "Crucifixo na Máquina",
  "description",
  "category",
  120,
  20,
  20,
  20,
  "2"
);

const training = new Trainning("Treino A", true, [exercise, exercise2], user.id);

const userRepo = new UserRepository();


console.log(userRepo.findAll())
