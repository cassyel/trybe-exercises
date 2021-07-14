const uppercase = require('./uppercase.js');

test('Return string with uppercase', (done) => {
  uppercase('test', str => {
    expect(str).toBe('TEST');
    done();
  })
})
