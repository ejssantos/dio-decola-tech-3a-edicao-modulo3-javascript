/** Estruturas de Repetição
 * 
 *  for
 * 
 *    É um loop dentro de elementos iteráveis (arrays e strings).
 * 
 *  for in
 * 
 *    É um loop entre propriedades enumeráveis de um objeto.
 * 
 *  for of
 * 
 *    É um loop dentro de estruturas iteráveis (arrays, strings).
 * 
 *  while
 * 
 *    Executa instruções até que a condição se torne falsa.
 * 
 *  do while
 * 
 *    Executa instruções enquanto a condição for verdadeira. Porém é executado ao menos uma vez.
 */

//----------------------------------------------------------------------------
//                        Exemplo do uso do for
//----------------------------------------------------------------------------

console.log();
console.log('-------------------------------- FOR ---------------------------------------');

function multiplicarPorDois(array) {
  let multiplicados = [];

  for (let index = 0; index < array.length; index++) {
    multiplicados.push(array[index] * 2);
  }

  return multiplicados;
}

const numeros = [2, 3, 4, 5, 6, -25, 0];
console.log(numeros);
console.log(multiplicarPorDois(numeros));


//----------------------------------------------------------------------------
//                        Exemplo do uso do for in
//----------------------------------------------------------------------------

console.log();
console.log('-------------------------------- FOR IN ------------------------------------');

var meuObjeto = {
  nome: 'Eduardo'
  , idade: 43
  , cidade: 'Maceió'
  , estado: 'Alagoas'
}

function obterPropriedades(objeto) {
  for(propriedade in objeto) {
    console.log(propriedade);
  }
}

function obterValores(objeto) {
  for(propriedade in objeto) {
    console.log(objeto[propriedade]);
  }
}

obterPropriedades(meuObjeto);
console.log('----------');
obterValores(meuObjeto);


//Inicializando objeto...
function limparValores(objeto) {
  for(propriedade in objeto) {
    objeto[propriedade] = null;
  }
}

console.log('===============');
limparValores(meuObjeto);
console.log(meuObjeto);


//----------------------------------------------------------------------------
//                        Exemplo do uso do for of
//----------------------------------------------------------------------------

console.log();
console.log('-------------------------------- FOR OF ------------------------------------');
function logLetras(palavra) {
  for(letra of palavra) {
    console.log(letra);
  }
}

logLetras('Abacaxi');

function logNumeros(numeros) {
  for(numero of numeros) {
    console.log(numero);
  }
}

var nums = [30, 20, 233, 2];
logNumeros(nums);


//----------------------------------------------------------------------------
//                        Exemplo do uso do while
//----------------------------------------------------------------------------

console.log();
console.log('-------------------------------- WHILE ------------------------------------');

function exemploWhile() {
  let num = 0;

  while (num <= 5) {
    console.log(num);
    num++;
  }
}

exemploWhile();


//----------------------------------------------------------------------------
//                        Exemplo do uso do "do while"
//----------------------------------------------------------------------------

console.log();
console.log('------------------------------ DO WHILE ------------------------------------');

function exemploDoWhile() {
  let num = 0;

  do {
    console.log(num);
    num++;
  } while (num <= 5)
}

exemploDoWhile();

//O exemplo abaixo é para mostrar que o "do while" sempre executará ao menos uma vez, durante o loop.
console.log('2º exemplo do "do while":');
function exemploDoWhile2() {
  let num = 6;

  do {
    console.log(num);
    num++;
  } while (num <= 5)
}

exemploDoWhile2();