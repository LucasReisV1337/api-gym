import Trainning from './trainning';

describe('Trainning', () => {
    let trainning: Trainning;

    beforeEach(() => {
        trainning = new Trainning('Test Trainning', true);
    });

    it('should have a valid id', () => {
        expect(trainning.id).toBeDefined();
        expect(trainning.id.length).toBeGreaterThan(0);
    });

    it('should have a name', () => {
        expect(trainning.name).toBe('Test Trainning');
    });

    it('should be active', () => {
        expect(trainning.isActive).toBe(true);
    });

    it('should create a new trainning', () => {
        const newTrainning = trainning.createTraining('New Trainning', false);
        expect(newTrainning).toBeInstanceOf(Trainning);
        expect(newTrainning.name).toBe('New Trainning');
        expect(newTrainning.isActive).toBe(false);
    });

    it('should update the trainning', () => {
        const updatedTrainning = trainning.updateTraining('Updated Trainning', false);
        expect(updatedTrainning).toBe(trainning);
        expect(trainning.name).toBe('Updated Trainning');
        expect(trainning.isActive).toBe(false);
    });

    it('should delete the trainning', () => {
        const deletedTrainning = trainning.deleteTraining();
        expect(deletedTrainning).toBe(trainning);
        expect(trainning.isActive).toBe(false);
    });

    it('should return itself when listing trainnings', () => {
        const listedTrainnings = trainning.listTrainings();
        expect(listedTrainnings).toBe(trainning);
    });

    it('should return itself when getting trainning by id', () => {
        const trainningById = trainning.getTrainingById('123');
        expect(trainningById).toBe(trainning);
    });

    it('should activate the trainning', () => {
        const activatedTrainning = trainning.activateTraining();
        expect(activatedTrainning).toBe(trainning);
        expect(trainning.isActive).toBe(true);
    });
});
