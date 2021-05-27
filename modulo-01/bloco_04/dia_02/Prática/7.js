let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerNumber = numbers[0];

for(i = 1; i < numbers.length; i++) {
  if (numbers[i] < lowerNumber) {
    lowerNumber = numbers[i];
  }
}

console.log(lowerNumber)