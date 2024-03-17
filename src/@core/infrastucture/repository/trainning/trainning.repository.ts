import { PrismaClient } from "@prisma/client";
import Trainning from "../../../domain/trainning/entity/trainning";
import TrainningRepositoryInterface from "../../../domain/trainning/repository/trainning-repository-interface";
const prisma = new PrismaClient();

export default class TrainningRepository
{
  async create(trainning: Trainning): Promise<void> {
    try {
      await prisma.trainning.create({
        data: {
          name: trainning.name,
          isActive: trainning.isActive,
          exercises: {
            create: trainning.exercises,
          },
          user: {
            connect: {
              id: trainning.userId,
            },
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async update(trainning: Trainning): Promise<void> {
    try {
      await prisma.trainning.update({
        where: {
          id: trainning.id,
        },
        data: {
          name: trainning.name,
          isActive: trainning.isActive,
          exercises: {
            create: trainning.exercises,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await prisma.trainning.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
