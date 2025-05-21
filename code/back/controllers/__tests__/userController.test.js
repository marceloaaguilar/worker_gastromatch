jest.mock('../../models/user', () => ({
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));

const userController = require('../userController');
const User = require('../../models/user');

describe('User Controller', () => {
  describe('getAllUsers', () => {
    it('deve retornar todos os usuários com status 200', async () => {
      // Arrange
      const mockUsers = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' }
      ];
      User.findAll.mockResolvedValue(mockUsers);
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const next = jest.fn();

      // Act
      await userController.getAllUsers(req, res, next);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'success',
        results: mockUsers.length,
        data: { users: mockUsers }
      });
    });
  });

  describe('getUser', () => {
    it('deve retornar o usuário com status 200', async () => {
      // Arrange
      const mockUser = { id: 1, name: 'User 1' };
      User.findOne.mockResolvedValue(mockUser);
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const next = jest.fn();

      // Act
      await userController.getUser(req, res, next);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        status: 'success',
        data: { user: mockUser }
      });
    });
  });
}); 