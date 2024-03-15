import Exercise from "./@core/exercise/entity/exercise";
import Trainning from "./@core/trainning/entity/trainning";
import User from "./@core/user/entity/user";

describe("User", () => {
    let user: User;
    let training: Trainning;
    let exercise: Exercise;

    beforeEach(() => {
        user = new User("nickname", "email", 123456789, "password");
        training = new Trainning("name", true);
        exercise = new Exercise("peitao", "description", "category", 60, 10, 10, 10);
    });

    it("should add training to user", () => {
        user.addTraining(training);
        expect(user.getTrainings()).toContain(training);
    });

    it("should create training with exercises", () => {
        training.createTraining("name", true, [exercise]);
        expect(training.getExercises()).toContain(exercise);
    });
});
