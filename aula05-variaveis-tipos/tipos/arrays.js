//Arrays

let array = [];

//push      --> adiciona elementos ao final do array.
array.push(3);
array.push(4,2);

//pop       --> remove o último elemento do array.
array.pop();

//shift     --> remove o primeiro elemento do array.
array.shift();

//unshift   --> adiciona um elemento no início do array.
array.unshift(1);

//includes  --> verifica se um elemento existe no array.
console.log(`array.includes(3): ${array.includes(3)}`);
console.log(`array.includes(4): ${array.includes(4)}`);

//every     --> verifica se todos os elementos do array corresponde a um determinado valor.
console.log(`array.every(1): ${array.every(item => item === 1)}`);

//some      --> verifica se algum dos elementos do array corresponde a um determinado valor.
console.log(`array.some(1): ${array.some(item => item === 1)}`);

//reverse   --> inverte a ordem elementos do array.
console.log(array);
console.log(`array: ${array}`);
console.log(`array.reverse(): ${array.reverse()}`);


console.log(array);


for(let i = 0; i < array.length; i++){
  console.log(array[i]);
}