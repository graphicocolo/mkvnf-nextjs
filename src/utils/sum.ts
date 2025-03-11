export const sum = (a: number, b: number) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('引数は数値で渡してください');
  }
  return a + b;
};
