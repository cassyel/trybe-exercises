
let n = 5;
let ast = '*';
let input = '';
let inputPosition = n;

for (let i = 0; i < n; i += 1) {
  for (let colunaI = 0; colunaI <= n; colunaI += 1) {
    if (colunaI < inputPosition) {
      input = input + ' ';
    } else {
      input = input + ast;
    }
  }
  console.log(input);
  input = '';
  inputPosition -= 1;
};