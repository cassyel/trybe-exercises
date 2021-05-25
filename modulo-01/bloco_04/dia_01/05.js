let angulo1 = 65;
let angulo2 = 100;
let angulo3 = 10;

let somaDosAngulos = angulo1 + angulo2 + angulo3;

let TodosAngulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(TodosAngulosPositivos){
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}