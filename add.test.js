const { add } = require('./add');

describe('add', () => {
  test('is a function', () => {
    expect(add).toBeInstanceOf(Function);
  });

  // test('returns a number', () => {
  //   expect(typeof largestProductOfThree([1, 2, 3])).toBe('number');
  // });

  // test('gives largest product of three', () => {
  //   expect(largestProductOfThree([1, 2, 3])).toBe(6);
  //   expect(largestProductOfThree([2, 1, 3, 7])).toBe(42);
  // });
});