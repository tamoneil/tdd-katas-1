const { getFactors, generator } = require('./prime-factors');

describe('#primeFactor', () => {
  describe('base functionality', () => {
    test('should return an empty array when given 1', () => {
      expect(getFactors(1)).toEqual([]);
    });
    test('should return [2] when given 2', () => {
      expect(getFactors(2)).toEqual([2]);
    });
    test('should return [3] when given 3', () => {
      expect(getFactors(3)).toEqual([3]);
    });
    test('should return [2,2] when given 4', () => {
      expect(getFactors(4)).toEqual([2, 2]);
    });
    test('should return [2,3] when given 6', () => {
      expect(getFactors(6)).toEqual([2, 3]);
    });
    test('should return [2,2,2] when given 8', () => {
      expect(getFactors(8)).toEqual([2, 2, 2]);
    });
    test('should return [2,2,3, 5, 7, 11] when given 4620', () => {
      expect(getFactors(4620)).toEqual([2, 2, 3, 5, 7, 11]);
    });
  });

  describe('optimizations', () => {
    test('should return [2,97] when given 194', () => {
      expect(getFactors(194)).toEqual([2, 97]);
    });
  });
});

describe('#generator', () => {
  describe('base functionality', () => {
    test.only('should find previous prime number 3 when given 5', () => {
      expect(generator(5)).toEqual(3);
    });
  });
});
