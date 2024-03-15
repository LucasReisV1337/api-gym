import Trainning from './trainning';
import Exercise from "../../exercise/entity/exercise";

describe('Trainning', () => {
    let trainning: Trainning;
    let exercise: Exercise;

    beforeEach(() => {
        exercise = new Exercise("Supino Reto", "description", "category", 60, 10, 10, 10);
        trainning = new Trainning('Test Trainning', true, [exercise]);
    });

    it('should create a new Trainning instance', () => {
        expect(trainning).toBeInstanceOf(Trainning);
    });

    it('should update the Trainning', () => {
        trainning.updateTraining('Updated Trainning', false);
        expect(trainning.name).toBe('Updated Trainning');
        expect(trainning.isActive).toBe(false);
    });

    it('should remove an exercise from the Trainning', () => {
        trainning.removeExercise(exercise);
        expect(trainning.getExercises()).not.toContain(exercise);
    });

    it('should get an exercise by id', () => {
        const foundExercise = trainning.getExerciseById(exercise.id);
        expect(foundExercise).toBe(exercise);
    });
});