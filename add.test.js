const { add } = require('./add');

describe('add', () => {
  test('is a function', () => {
    expect(add).toBeInstanceOf(Function);
  });

  test('returns a number', () => {
    expect(typeof add(1, 2)).toBe('number');
  });

  test('returns sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(2, 3)).toBe(5);
  });
});