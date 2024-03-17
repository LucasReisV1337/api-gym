import { randomUUID as uuid} from "crypto";

export default class Exercise {
  private _id: string;
  private _name: string;
  private _description: string;
  private _category: string;
  private _restTime: number;
  private _weight: number;
  private _repetitions: number;
  private _series: number;
  private _trainningId: string;

  constructor(
    name: string,
    description: string,
    category: string,
    restTime: number,
    weight: number,
    repetitions: number,
    series: number,
    trainningId: string
  ) {
    this._id = uuid();
    this._name = name;
    this._description = description;
    this._category = category;
    this._restTime = restTime;
    this._weight = weight;
    this._repetitions = repetitions;
    this._series = series;
    this._trainningId = trainningId;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get category(): string {
    return this._category;
  }

  get restTime(): number {
    return this._restTime;
  }

  get weight(): number {
    return this._weight;
  }

  get repetitions(): number {
    return this._repetitions;
  }

  get series(): number {
    return this._series;
  }
  
  get trainningId(): string {
    return this._trainningId;
  }

  createExercise(
    name: string,
    description: string,
    category: string,
    restTime: number,
    weight: number,
    repetitions: number,
    series: number,
    trainningId: string
  ): Exercise {
    return new Exercise(
      name,
      description,
      category,
      restTime,
      weight,
      repetitions,
      series,
      trainningId
    );
  }

  updateExercise(
    name: string,
    description: string,
    category: string,
    restTime: number,
    weight: number,
    repetitions: number,
    series: number
  ): Exercise {
    this._name = name;
    this._description = description;
    this._category = category;
    this._restTime = restTime;
    this._weight = weight;
    this._repetitions = repetitions;
    this._series = series;
    return this;
  }

  deleteExercise(): Exercise {
    this._name = "";
    this._description = "";
    this._category = "";
    this._restTime = 0;
    this._weight = 0;
    this._repetitions = 0;
    this._series = 0;
    return this;
  }

  listExercises(): Exercise {
    return this;
  }

  getExerciseById(id: string): Exercise {
    return this;
  }
}
