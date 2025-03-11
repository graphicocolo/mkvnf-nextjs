import { sum } from '@/utils/sum';

describe('sum 関数のテスト', () => {
  test('2 と 2 を渡したら 4 になること', () => {
    expect(sum(2, 2)).toBe(4);
  });

  test('-1 と 5 を渡したら 4 になること', () => {
    expect(sum(-1, 5)).toBe(4);
  });

  test('0 と 0 を渡したら 0 になること', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('文字列を渡したらエラーになること', () => {
    expect(() => sum('a', 'b')).toThrow('引数は数値で渡してください');
  });
});
