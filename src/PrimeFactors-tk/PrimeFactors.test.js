const { generate } = require('./PrimeFactors');

describe('#primeFactor', () => {
  test('should return an empty array when given 1', () => {
    expect(generate(1)).toEqual([]);
  });
  test('should return [2] when given 2', () => {
    expect(generate(2)).toEqual([2]);
  });
  test('should return [3] when given 3', () => {
    expect(generate(3)).toEqual([3]);
  });
  test('should return [2,2] when given 4', () => {
    expect(generate(4)).toEqual([2, 2]);
  });
  test('should return [2,3] when given 6', () => {
    expect(generate(6)).toEqual([2, 3]);
  });
  test('should return [2,2,2] when given 8', () => {
    expect(generate(8)).toEqual([2, 2, 2]);
  });
});
