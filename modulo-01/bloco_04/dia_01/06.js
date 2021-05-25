let peça = 'jorge';

switch (peça.toLocaleLowerCase()) {
  case 'rei' :
    console.log('Rei - Uma casa por vez, em qualquer direção');
    break;
  case 'dama' :
    console.log('Dama, Diagonal, horizontal e vertical');
    break;
  case 'bispo' :
    console.log('Bispo - Diagonal');
    break;
  case 'cavalo' :
    console.log('Cavalo - Em L, pode pular sobre peças');
    break;
  case 'torre' :
    console.log('Torre, horizontal e vertical');
    break;
  case 'peão' :
    console.log('Peão - Apenas uma casa para frente, no primeiro movimento podem ser duas casas')
    break;
  default:
    console.log('Erro, peça inválida');
    break
}