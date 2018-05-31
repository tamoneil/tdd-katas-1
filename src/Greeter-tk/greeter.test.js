const greeter = require('./greeter');

describe('#greeter', () => {
  test('should return Hello Kitty when passed Kitty', () => {
    const date = '2018-05-15T19:21:47.992Z';
    expect(greeter('Kitty', date)).toBe('Hello Kitty');
  });
  test('should return Hello Puppy when passed Puppy', () => {
    const date = '2018-05-15T19:21:47.992Z';
    expect(greeter('Puppy', date)).toBe('Hello Puppy');
  });
  test('should return Hello Kelly when passed Kelly with extra spaces', () => {
    const date = '2018-05-15T19:21:47.992Z';
    expect(greeter(' Kelly ', date)).toBe('Hello Kelly');
  });
  test('should return Hello Tami when passed tami with lower case t', () => {
    const date = '2018-05-15T19:21:47.992Z';
    expect(greeter('tami', date)).toBe('Hello Tami');
  });
  test('should return Good morning Kush when the time is between 6am-12pm', () => {
    const date = '2018-05-15T12:21:47.992Z';
    expect(greeter('Kush', date)).toBe('Good morning Kush');
  });
  test('should return Good evening Tanner when the time is between 18-22pm', () => {
    const date = '2018-05-15T00:21:47.992Z';
    expect(greeter('Tanner', date)).toBe('Good evening Tanner');
  });
  test('should return Good Night Michael when the time is between 23pm-06am', () => {
    const date = '2018-05-15T11:21:47.992Z';
    expect(greeter('Michael', date)).toBe('Good night Michael');
  });
  test('should call console.log whenever function is called', () => {
    const date = '2018-05-15T19:21:47.992Z';
    const spy = jest.spyOn(console, 'log');

    greeter('Party People', date);

    expect(spy).toHaveBeenCalled();

    spy.mockReset();
    spy.mockRestore();
  });
});
