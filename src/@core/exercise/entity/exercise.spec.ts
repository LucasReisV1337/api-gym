import Exercise from './exercise';

describe('Exercise', () => {
    let exercise: Exercise;

    beforeEach(() => {
        exercise = new Exercise(
            'Exercise Name',
            'Exercise Description',
            'Exercise Category',
            60,
            50,
            10,
            3
        );
    });

    it('should create an exercise', () => {
        expect(exercise).toBeInstanceOf(Exercise);
        expect(exercise.name).toBe('Exercise Name');
        expect(exercise.description).toBe('Exercise Description');
        expect(exercise.category).toBe('Exercise Category');
        expect(exercise.restTime).toBe(60);
        expect(exercise.weight).toBe(50);
        expect(exercise.repetitions).toBe(10);
        expect(exercise.series).toBe(3);
    });

    it('should update an exercise', () => {
        exercise.updateExercise(
            'Updated Exercise Name',
            'Updated Exercise Description',
            'Updated Exercise Category',
            30,
            40,
            5,
            2
        );

        expect(exercise.name).toBe('Updated Exercise Name');
        expect(exercise.description).toBe('Updated Exercise Description');
        expect(exercise.category).toBe('Updated Exercise Category');
        expect(exercise.restTime).toBe(30);
        expect(exercise.weight).toBe(40);
        expect(exercise.repetitions).toBe(5);
        expect(exercise.series).toBe(2);
    });

    it('should delete an exercise', () => {
        exercise.deleteExercise();

        expect(exercise.name).toBe('');
        expect(exercise.description).toBe('');
        expect(exercise.category).toBe('');
        expect(exercise.restTime).toBe(0);
        expect(exercise.weight).toBe(0);
        expect(exercise.repetitions).toBe(0);
        expect(exercise.series).toBe(0);
    });

    it('should list exercises', () => {
        const exercises = exercise.listExercises();

        expect(exercises).toBeInstanceOf(Exercise);
        expect(exercises.name).toBe('Exercise Name');
        expect(exercises.description).toBe('Exercise Description');
        expect(exercises.category).toBe('Exercise Category');
        expect(exercises.restTime).toBe(60);
        expect(exercises.weight).toBe(50);
        expect(exercises.repetitions).toBe(10);
        expect(exercises.series).toBe(3);
    });

    it('should get an exercise by id', () => {
        const id = exercise.id;
        const exerciseById = exercise.getExerciseById(id);

        expect(exerciseById).toBeInstanceOf(Exercise);
        expect(exerciseById.name).toBe('Exercise Name');
        expect(exerciseById.description).toBe('Exercise Description');
        expect(exerciseById.category).toBe('Exercise Category');
        expect(exerciseById.restTime).toBe(60);
        expect(exerciseById.weight).toBe(50);
        expect(exerciseById.repetitions).toBe(10);
        expect(exerciseById.series).toBe(3);
    });
});
