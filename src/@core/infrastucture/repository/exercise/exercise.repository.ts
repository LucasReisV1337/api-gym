import { PrismaClient } from "@prisma/client";
import Exercise from "../../../domain/exercise/entity/exercise";
import ExerciseRepositoryInterface from "../../../domain/exercise/repository/exercise-repository-interface";
const prisma = new PrismaClient();

export default class ExerciseRepository implements ExerciseRepositoryInterface {
  async create(exercise: Exercise): Promise<void> {
    try {
        await prisma.exercise.create({
            data: {
                name: exercise.name,
                description: exercise.description,
                category: exercise.category,
                restTime: exercise.restTime,
                weight: exercise.weight,
                repetitions: exercise.repetitions,
                series: exercise.series,
                trainning: {
                    connect: {
                        id: exercise.trainningId
                    }
                }
            },
        });
    } catch (error) {
        console.log(error);
    }
  }

  async update(exercise: Exercise): Promise<void> {
    try {
      await prisma.exercise.update({
        where: {
          id: exercise.id,
        },
        data: {
          name: exercise.name,
          description: exercise.description,
          category: exercise.category,
          restTime: exercise.restTime,
          weight: exercise.weight,
          repetitions: exercise.repetitions,
          series: exercise.series,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<Exercise[]> {
    try {
      const exercises = await prisma.exercise.findMany();
      return exercises.map(
        (exercise) =>
          new Exercise(
            exercise.name,
            exercise.description,
            exercise.category,
            exercise.restTime,
            exercise.weight,
            exercise.repetitions,
              exercise.series,
                exercise.trainningId
          )
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async findById(id: string): Promise<Exercise | undefined> {
    try {
      const exercise = await prisma.exercise.findUnique({
        where: {
          id: id,
        },
      });
      return exercise
        ? new Exercise(
            exercise.name,
            exercise.description,
            exercise.category,
            exercise.restTime,
            exercise.weight,
            exercise.repetitions,
            exercise.series,
            exercise.trainningId
          )
        : undefined;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await prisma.exercise.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
