import Exercise from "@src/@core/domain/exercise/entity/exercise";
import { randomUUID as uuid } from "crypto";

export default class Trainning {
  private _id: string;
  private _name: string;
  private _isActive: boolean;
  private _exercises: Exercise[];

  constructor(name: string, isActive: boolean, exercises: Exercise[] = []) {
    this._id = uuid();
    this._name = name;
    this._isActive = isActive;
    this._exercises = exercises;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get isActive(): boolean {
    return this._isActive;
  }


  removeExercise(exercise: Exercise): void {
    const index = this._exercises.indexOf(exercise);
    this._exercises.splice(index, 1);
  }

  editExercise(exercise: Exercise, newExercise: Exercise): void {
    const index = this._exercises.indexOf(exercise);
    this._exercises[index] = newExercise;
  }

  getExerciseById(id: string): Exercise | undefined {
    return this._exercises.find((exercise) => exercise.id === id);
  }

  getExercises(): Exercise[] {
    return this._exercises;
  }
}
