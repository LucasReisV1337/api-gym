import Exercise from "./@core/domain/exercise/entity/exercise";
import Trainning from "./@core/domain/trainning/entity/trainning";
import User from "./@core/domain/user/entity/user";

describe('User', () => {
    let user: User;
    let exercise: Exercise;
    let exercise2: Exercise;
    let training: Trainning;

    beforeEach(() => {
        user = new User("nickname", "email", "password");

        exercise = new Exercise("Supino Reto", "description", "category", 60, 10, 10, 10);
        exercise2 = new Exercise("Crucifixo na Máquina", "description", "category", 120, 20, 20, 20);

        training = new Trainning("Treino A", true, [exercise, exercise2]);

        user.addTraining(training);
    });

    it('should be able to add a training', () => {
        expect(user.getTrainings()).toEqual([training]);
    });

    it('should be able to edit a training', () => {
        const updatedTraining = new Trainning("Treino B", false, [exercise]);

        user.editTraining(training, updatedTraining);

        expect(user.getTrainings()).toEqual([updatedTraining]);
    });

    it('should be able to delete all trainings', () => {
        user.deleteTraining(training);

        expect(user.getTrainings()).toEqual([]);
    });
});