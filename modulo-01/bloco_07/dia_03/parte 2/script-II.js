const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths (str) {
  const output = [];
  for (let i = 0; i < str.length; i++) {
    output.push(str[i].length);
  }
  return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
