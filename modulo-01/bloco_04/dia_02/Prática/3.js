let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result1 = 0;

for(i = 0; i < numbers.length; i++) {
  result1 += numbers[i];
}
let result2 = result1 / numbers.length
console.log(result2)