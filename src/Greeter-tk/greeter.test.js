const greeter = require('./greeter');

describe('#greeter', () => {
  test('should return Hello Kitty when passed Kitty', () => {
    expect(greeter('Kitty')).toBe('Hello Kitty');
  });
  test('should return Hello Puppy when passed Puppy', () => {
    expect(greeter('Puppy')).toBe('Hello Puppy');
  });
  test('should return Hello Kelly when passed Kelly with extra spaces', () => {
    expect(greeter(' Kelly ')).toBe('Hello Kelly');
  });
  test('should return Hello Tami when passed tami with lower case t', () => {
    expect(greeter('tami')).toBe('Hello Tami');
  });
  test('should return Good morning Kush when the time is between 6am-12pm', () => {
    const date = '2018-05-15T12:21:47.992Z';
    expect(greeter('Kush', date)).toBe('Good morning Kush');
  });
});
