const getUserName = require('./getUserName.js');

test('Quando o usuário não é encontrado',  () => {
  expect.assertions(1);
  return getUserName(6).catch(error => 
    expect(error).toEqual({error: 'User with 6 not found.'})
    );
})

test('Quando o usuário é encontrado', () => {
  expect.assertions(1);
  return getUserName(4).then(user => expect(user).toEqual('Mark'))
})
