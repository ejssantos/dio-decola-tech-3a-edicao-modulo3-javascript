/** Estrutura Condicional
 *  if/else
 * 
 *  Observação: JavaScript não tem a palavra-chave elseif, as palavras estão sempre espaçadas, ou seja, else if.
 */

//Exemplo: if/else
function numeroPositivo(num) {
  let resultado = false;

  if (num < 0) {
    resultado = false;
  } else {
    resultado = true;
  }

  return resultado;
}

console.log(numeroPositivo(0));
console.log(numeroPositivo(-1));
console.log(numeroPositivo(3));


//Otimizando o código acima...
function checarNumPositivo(num) {
  return !(num < 0);
}

console.log('---------------------');
console.log(checarNumPositivo(0));
console.log(checarNumPositivo(-1));
console.log(checarNumPositivo(3));


//Outro exemplo: if/else
function checarNumPositivo2(num) {
  let eNegativo = (num < 0);

  if (eNegativo) {
    return false;
  }

  return true
}

console.log('---------------------');
console.log(checarNumPositivo(0));
console.log(checarNumPositivo(-1));
console.log(checarNumPositivo(3));


//if aninhado
function numeroPositivo3(num) {
  let eNegativo = num < 0;
  let maiorQueDez = num > 10;

  if (eNegativo) {
    return 'Esse número é negativo.';
  } else if (maiorQueDez) {
    return 'Esse número é positivo e maior que dez.';
  }

  return 'Esse número é positivo';
}

console.log('---------------------');
console.log('0:  ' + numeroPositivo3(0));
console.log('-1: ' + numeroPositivo3(-1));
console.log('11: ' + numeroPositivo3(11));
console.log('10: ' + numeroPositivo3(10));


/** Estrutura Condicional
 *  switch/case
 * 
 *  Equivale a uma comparação de tipo e valor (===).
 *  Sempre precisa de um valor "default".
 *  Ideal para quando se precisa comparar muitos valores.
 */

function getAnimal(id) {
  switch(id) {
    case 1:
      return 'Cão';
    case 2:
      return 'Gato';
    case 3:
      return 'Pássaro';
    default:
      return 'Peixe';
  }
}

console.log('---------------------');
console.log(`Id = 1: ${getAnimal(1)}`);
console.log(`Id = "1": ${getAnimal("1")}`);   //Equivale a uma comparação de tipo e valor (===).
console.log(`Id = 1: ${getAnimal(2)}`);
console.log(`Id = 1: ${getAnimal(3)}`);
console.log(`Id = 1: ${getAnimal(4)}`);