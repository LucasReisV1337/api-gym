import { PrismaClient } from "@prisma/client";
import User from "../../domain/user/entity/user";
import UserRepository from "./user.repository";

const prisma = new PrismaClient();

describe("UserRepository", () => {
  let userRepository: UserRepository;

  beforeAll(() => {
    userRepository = new UserRepository();
  });

  afterEach(async () => {
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("create", () => {
    it("should create a new user", async () => {
      const user = new User("John Doe", "john@example.com", "password");

      await userRepository.create(user);

      const createdUser = await prisma.user.findUnique({
        where: {
          email: user.email,
        },
      });

      expect(createdUser).toBeDefined();
      expect(createdUser?.nickname).toBe(user.nickname);
    });
  });

  describe("findById", () => {
    it("should return the user with the specified id", async () => {
      const user = new User("John Doe", "john@example.com", "password");
      const createdUser = await prisma.user.create({
        data: {
          nickname: user.nickname,
          email: user.email,
          password: user.password
        },
      });

      const foundUser = await userRepository.findById(createdUser.id);

      expect(foundUser).toBeDefined();
      expect(foundUser?.nickname).toBe(user.nickname);
      expect(foundUser?.email).toBe(user.email);
    });

    it("should return undefined if the user is not found", async () => {
      const foundUser = await userRepository.findById("nonexistent-id");

      expect(foundUser).toBeUndefined();
    });
  });

  describe("delete", () => {
    it("should delete the user with the specified id", async () => {
      const user = new User("John Doe", "john@example.com", "password");
      const createdUser = await prisma.user.create({
        data: {
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        },
      });

      await userRepository.delete(createdUser.id);

      const deletedUser = await prisma.user.findUnique({
        where: {
          id: createdUser.id,
        },
      });

      expect(deletedUser).toBeNull();
    });
  });

  describe("findByEmail", () => {
    it("should return the user with the specified email", async () => {
      const user = new User("John Doe", "john@example.com", "password");
      await prisma.user.create({
        data: {
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        },
      });

      const foundUser = await userRepository.findByEmail(user.email);

      expect(foundUser).toBeDefined();
      expect(foundUser?.nickname).toBe(user.nickname);
      expect(foundUser?.email).toBe(user.email);
    });

    it("should return undefined if the user is not found", async () => {
      const foundUser = await userRepository.findByEmail(
        "nonexistent@example.com"
      );

      expect(foundUser).toBeUndefined();
    });
  });

  describe("findAll", () => {
    it("should return all users", async () => {
      const user1 = new User("John Doe", "johndoe@email.com", "password");
      const user2 = new User("Jane Doe2", "johndoe2@email.com", "password");
      await prisma.user.create({
        data: {
          nickname: user1.nickname,
          email: user1.email,
          password: user1.password,
        },
      });
      await prisma.user.create({
        data: {
          nickname: user2.nickname,
          email: user2.email,
          password: user2.password,
        },
      });

      const users = await userRepository.findAll();
      expect(users).toHaveLength(2);
    });
  });
});
