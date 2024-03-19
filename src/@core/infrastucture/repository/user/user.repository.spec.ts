
import User from '../../../domain/user/entity/user';
import UserRepository from './user.repository';

// Mock PrismaClient
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn(() => ({
    user: {
      create: jest.fn(),
      update: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      delete: jest.fn(),
    },
  })),
}));

describe('UserRepository', () => {
  let userRepository:any;

  beforeEach(() => {
    userRepository = new UserRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      userRepository.findByEmail = jest.fn(() => Promise.resolve(undefined));
      const mockUser = new User('test_user', 'test@example.com', 'password123');
      await userRepository.create(mockUser);
      expect(userRepository.findByEmail).toHaveBeenCalledWith('test@example.com');
      expect(userRepository.prisma.user.create).toHaveBeenCalledWith({
        data: {
          nickname: 'test_user',
          email: 'test@example.com',
          password: 'password123',
        },
      });
    });

    it('should throw error if user already exists', async () => {
      userRepository.findByEmail = jest.fn(() => Promise.resolve(new User(
        'existing_user',
        'email',
        'password',
        '1'
      )));
      const mockUser = new User('existing_user', 'existing@example.com', 'password123');
      await expect(userRepository.create(mockUser)).rejects.toThrow('Usuário já cadastrado');
    });
  });

  describe('update', () => {
    it('should update an existing user', async () => {
      const mockUser = new User('test_user', 'test@example.com', 'password123');
      await userRepository.update(mockUser);
      expect(userRepository.prisma.user.update).toHaveBeenCalledWith({
        where: { id: mockUser.id },
        data: {
          nickname: 'test_user',
          email: 'test@example.com',
          password: 'password123',
        },
      });
    });
  });

  describe('findAll', () => {
    it('should find all users', async () => {
      userRepository.prisma.user.findMany.mockResolvedValueOnce([
        { id: '1', nickname: 'user1', email: 'user1@example.com', password: 'password1' },
        { id: '2', nickname: 'user2', email: 'user2@example.com', password: 'password2' },
      ]);
      const users = await userRepository.findAll();
      expect(users).toHaveLength(2);
      expect(users[0]).toBeInstanceOf(User);
    });
  });

  describe('findById', () => {
    it('should find a user by ID', async () => {
      userRepository.prisma.user.findUnique.mockResolvedValueOnce({
        id: '1',
        nickname: 'test_user',
        email: 'test@example.com',
        password: 'password123',
      });
      const user = await userRepository.findById('1');
      expect(user).toBeInstanceOf(User);
      expect(user.nickname).toEqual('test_user');
    });

    it('should return undefined if user does not exist', async () => {
      userRepository.prisma.user.findUnique.mockResolvedValueOnce(undefined);
      const user = await userRepository.findById('999');
      expect(user).toBeUndefined();
    });
  });

  describe('delete', () => {
    it('should delete a user', async () => {
      await userRepository.delete('1');
      expect(userRepository.prisma.user.delete).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });

  describe('findByEmail', () => {
    it('should find a user by email', async () => {
      userRepository.prisma.user.findUnique.mockResolvedValueOnce({
        id: '1',
        nickname: 'test_user',
        email: 'test@example.com',
        password: 'password123',
      });
      const user = await userRepository.findByEmail('test@example.com');
      expect(user).toBeInstanceOf(User);
      expect(user.nickname).toEqual('test_user');
    });

    it('should return undefined if user does not exist', async () => {
      userRepository.prisma.user.findUnique.mockResolvedValueOnce(undefined);
      const user = await userRepository.findByEmail('nonexistent@example.com');
      expect(user).toBeUndefined();
    });
  });
});
