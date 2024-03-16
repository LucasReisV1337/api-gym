import Exercise from "./@core/domain/exercise/entity/exercise";
import Trainning from "./@core/domain/trainning/entity/trainning";

import User from "./@core/domain/user/entity/user";

const user = new User("nickname", "email", "password");

const exercise = new Exercise(
  "Supino Reto",
  "description",
  "category",
  60,
  10,
  10,
  10
);

const exercise2 = new Exercise(
  "Crucifixo na Máquina",
  "description",
  "category",
  120,
  20,
  20,
  20
);

const training = new Trainning("Treino A", true, [exercise, exercise2]);

user.addTraining(training);

user.getTrainings();
