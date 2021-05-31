//parte 1

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = document.getElementById('elementoOndeVoceEsta').parentElement;
  pai.style.color = 'blue';

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho').innerText = 'Exercicios 3';

const primeiroFilho = pai.firstElementChild;

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

const textElement = elementoOndeVoceEsta.nextSibling;

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

//parte 2

const irmao = document.createElement('div');
  irmao.id = 'irmao';
  pai.appendChild(irmao);

const filho = document.createElement('div');
  filho.id ='filhoElementoOndeVoceEsta';
  elementoOndeVoceEsta.appendChild(filho);

const filho2 = document.createElement('div');
const primeiroFilhoDoFilho2 = document.getElementById('primeiroFilhoDoFilho');
  filho2.id ='filho2';
  primeiroFilhoDoFilho2.appendChild(filho2);

const terceiroFilho3 = primeiroFilhoDoFilho2
      .parentElement // primeiroFilhoDoFilho
      .parentElement // elementoOndeVoceEsta
      .nextElementSibling; // terceiroFilho 

// parte 3

const pai3 = document.getElementById('pai');

for (let i = pai.childNodes.length -1; i >= 0; i -=1) {
  const children = pai.childNodes[i];
  if (children.id !== 'elementoOndeVoceEsta') {
    children.remove();
  }
}