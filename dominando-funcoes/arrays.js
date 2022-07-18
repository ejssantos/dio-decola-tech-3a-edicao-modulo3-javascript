/** Arrays
 * 
 *  Spread (...) é uma forma de lidar separadamente com elementos de um array.
 *  Ou seja, o que era parte de um array se torna um elemento independente.
 * 
 *  Exemplo:
 */

function somar(x, y, z, t) {
  return x + y + z + t;
}

const numbers = [1, 2, 3, 4];

console.log(`Resulta do soma: ${somar(...numbers)}`);


//Conferindo a quantidade de argumentos...
function confereQuantArgumentos(...args) {
  console.log(`Quantidade de argumentos: ${args.length}`);
  return arguments;
}

confereQuantArgumentos();       //0
confereQuantArgumentos(1, 2);   //2
confereQuantArgumentos([2, 5, 9], 'Teste', ['Maçã', 'Uva', 'Melão', 'Banana'], 100);  //4

console.log(confereQuantArgumentos([2, 5, 9], 'Teste', ['Maçã', 'Uva', 'Melão', 'Banana'], 100));