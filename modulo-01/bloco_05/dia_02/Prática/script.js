// 1
const exercise1 = document.createElement('h1');
  exercise1.id = ('exercise1');
  exercise1.innerText = 'Exercício 5.2 - JavaScript DOM'
  document.body.appendChild(exercise1);

//2
const exercise2 = document.createElement('div');
  exercise2.className = ('main-content');
  document.body.appendChild(exercise2);

//3
const exercise3 = document.createElement('div');
  exercise3.className = ('center-content');
  exercise2.appendChild(exercise3);

//4
const paragraph = document.createElement('p');
paragraph.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
exercise3.appendChild(paragraph);

//5
const exercise5 = document.createElement('div');
  exercise5.className = ('left-content');
  exercise2.appendChild(exercise5);

//6
const exercise6 = document.createElement('div');
  exercise6.className = ('right-content');
  exercise2.appendChild(exercise6);

//7
const exercise7 = document.createElement('img');
  exercise7.src = ('https://picsum.photos/200')
  exercise7.className = ('small-image');
  exercise5.append(exercise7);

//8
const exercise8 = document.createElement('ul');
  exercise6.appendChild(exercise8);
  const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
    'Sete', 'Oito', 'Nove', 'Dez']
  for (let num in arrayNumbers) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = arrayNumbers[num];
    exercise8.appendChild(elementLi);
}

//9
for ( i = 1; i <= 3; i++) {
const exercise9 = document.createElement('h3');
exercise9.innerText ='Trybe';
exercise2.appendChild(exercise9)
}

//Parte 2

//1
const exercise1_2 = exercise1.className = ('title');

//2
const elementsH3 = document.getElementsByTagName('h3');
  for (let index = 0; index < 3; index += 1) {
    elementsH3[index].className = 'description';
}

//3
const exercise3_2 = exercise2.removeChild(exercise5);

//4
const exercise4_2 = document.getElementsByClassName('right-content')[0];
  exercise4_2.style.marginRight='auto';

//5
const exercise5_2 = document.getElementsByClassName('main-content')[0];
  exercise5_2.style.backgroundColor='purple'

//6 
exercise8.lastChild.remove();
exercise8.lastChild.remove();