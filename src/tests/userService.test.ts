import { getUserName } from '@/services/userService';

jest.mock('../services/userService', () => ({
  getUserName: jest.fn((userId: string) => {
    if (userId === '123') {
      return 'Mock User';
    }
    throw new Error('User not found');
  }),
}));

describe('getUserName function', () => {
  test('returns the correct username for a valid user ID', () => {
    expect(getUserName('123')).toBe('Mock User');
  });

  test('throws an error for an invalid user ID', () => {
    expect(() => getUserName('999')).toThrow('User not found');
  });
});
