const getUserNameAsync = require('./getUserName-async');

describe('Found the user (ASYNC/AWAIT)', () => {
  it('return the user name', async () => {
    expect.assertions(1);
    const result = await getUserNameAsync(4);
    expect(result).toEqual('Mark');
  });
});

describe('Not found the user (ASYNC/AWAIT)', () => {
  it('return error (ASYNC/AWAIT)', async () => {
    expect.assertions(1);
    try{
      await getUserNameAsync(6)
    } catch (error) {
      expect(error).toEqual({error: 'User with 6 not found.'});
    }
  });
});