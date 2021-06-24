const people = [
  { name: 'Mateus', age: 20 },
  { name: 'José', age: 30 },
  { name: 'Ana', age: 50 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 12 },
];

people.sort((a, b) => b.age - a.age);

console.log(people);