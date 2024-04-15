import { PrismaClient } from "@prisma/client";
import User from "../../../domain/user/entity/user";
import UserRepositoryInterface from "../../../domain/user/repository/user-repository-interface";
const prisma = new PrismaClient();

export default class UserRepository implements UserRepositoryInterface {
  async create(user: User): Promise<void> {
    if (await this.findByEmail(user.email)) {
      throw new Error("Usuário já cadastrado");
    }
    try {
      await prisma.user.create({
        data: {
          nickname: user.nickname,
          email: user.email,
          password: user.password
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async update(user: User): Promise<void> {
    try {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const users = await prisma.user.findMany();
      console.log(users);
      return users.map(
        (user) => new User(user.nickname, user.email, user.password)
      );
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async findById(id: string): Promise<User | undefined> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      console.log(user);
      return user
        ? new User(user.nickname, user.email, user.password)
        : undefined;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await prisma.user.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findByEmail(email: string): Promise<User | undefined> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      console.log(user);
      return user
        ? new User(user.nickname, user.email, user.password)
        : undefined;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

}
