var jogador1 = 2;
var jogador2 = 3;
var placar;
var houve_partida = false;

var dia_da_semana;

//  if simples
if (jogador1 == jogador2) {
  console.log('Empate!');
}

//  if/else if/else
if (jogador1 > 0) {
  console.log('Jogador1 marcou ponto');
} else if (jogador2 > 0) {
  console.log('Jogador2 marcou ponto');
} else {
  console.log('Ninguém marcou ponto');
}

//  Aninhamento de ifs
if (houve_partida == true) {
  if (jogador1 > 0) {
    console.log('Jogador1 marcou ponto');
  } else if (jogador2 > 0) {
    console.log('Jogador2 marcou ponto');
  } else {
    console.log('Ninguém marcou ponto');
  }
}

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos')

//
//placar = jogador1 > jogador2;
//console.log(placar);

dia_da_semana = 7;
//  switch/case
switch (dia_da_semana) {
  case 1:
    console.log('Domingo');
    break;
  case 2:
    console.log('Segunda');
    break;
  case 3:
    console.log('Terça');
    break;
  case 4:
    console.log('Quarta');
    break;
  case 5:
    console.log('Quinta');
    break;
  case 6:
    console.log('Sexta');
    break;
  default:
    console.log('Sábado');
}


//  Estruturas de Repetição
//    for
//    for/in
//    for/of
//    while
//    do/while

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

//  for
//  Funciona como uma repetição de instrução até que a condição seja falsa.
//  Sintaxe geral: for([expressão inicial]; [condição lógica]; [incremento]){ declaracao }
console.log('FOR')
console.log('================');
for (let indice = 0; indice < array.length; indice++){
  console.log(indice);
}

//  for/in
//  Funciona como uma repetição a partir de uma propriedade.
/*
    Sintaxe geral:

    for ([indice] in [objeto ou array]){
      [declaração]
    }
*/
console.log('FOR/IN')
console.log('================');
for (let i in array) {
  console.log(i);
}

for (let obj in object) {
  console.log(obj);
}

//  for/of
//  funciona como uma repetição a partir de um valor.
/*
    for ([indice] of [array]) {
      [declaração]
    }
*/
console.log('FOR/OF')
console.log('================');
for (i of array) {
  console.log(i);
}

/*
    O for/of não funciona com objetos, porque as propriedades variam. Diferentes
    do índice em um array que sempre serão números interiros.

    for (obj of object) {
      console.log(obj);   //  Erro: script.js:110 Uncaught TypeError: object is not iterable
    }
*/

//  Mas se eu quiser pegar o valor mesmo assim?
for (obj of object.propriedade1) {
  console.log(obj);
}
//  Porém cada caractere dentro do valor será impressa em linhas separadas.

//  while
//  Executa uma instrução "enquanto" determinada condição for verdadeira, a
//  verificação é feita antes da execução.
console.log('WHILE')
console.log('================');
var ind = 0;
while(ind < array.length) {
  console.log(array[ind]);
  ind++;
}

//  do/while
//  Executa uma instrução "até que" determinada condição seja falsa, a
//  verificação é feita depois da execução.
console.log('DO/WHILE')
console.log('================');
var i = 0;
do {
  console.log(array[i])
  i++;
} while (i < array.length);