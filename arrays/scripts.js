//O que são vetores ou arrays

//Como declarar um array
let array = ['string', 1, true];
console.log(array);

//Array contendo outros arrays e elementos
let array2 = [array, 'string2', 2, false, ['array3', 3, true]];
console.log(array2);

//Acessando um elemento do array
console.log(array2[0]);
console.log(array2[3]);     //false

//Manipulando arrays
/*
    Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo:

    >>  forEach()   >>  Itera um array;
    >>  push()      >>  adiciona item no final do array;
    >>  pop()       >>  remove item no final do array;
    >>  unshift()   >>  adiciona item no início do array;
    >>  shift()     >>  remove item no início do array;
    >>  indexOf()   >>  retorna o índice de um valor;
    >>  splice()    >>  remove ou substitui um item pelo índice;
    >>  slice()     >>  retorna uma parte de um array existente;
*/

//forEach()
array2.forEach(function(item, index){
    console.log(item, index);
});

//push()
array2.push('push(): adiciona item no final');
console.log(array2);

//pop()
array2.pop();
console.log(array2);

//unshift()
array2.unshift('unshift(): adiciona item no início do array');
console.log(array2);

//shift()
array2.shift();
console.log(array2);

//indexOf()
console.log('false: ' + array2.indexOf(false));
console.log('string: ' + array.indexOf('string'));
console.log('Arquivo: ' + array.indexOf('Arquivo'));    //Retorna -1, ou seja, não localizado.

//slice()
console.log(array2.slice(0, 3));

//splice()
array2.splice(0, 3);
console.log(array2);


//Desestruturação
//Manipulando objetos
let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objectInterno: 'objeto interno'} };
console.log(object);
//Acessando os atributos
console.log(object.boolean);
console.log(object.objectInterno);
//Outra forma de desestruturação
var {string, number, boolean, objectInterno} = object;
console.log()