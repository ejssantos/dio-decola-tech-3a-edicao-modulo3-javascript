/** Arrow Functions '() => {}'
 *
 *  Uma expressão arrow function possui uma sintaxe mais curta quando comparada a
 *  uma expressão de função (function expression) e não tem seu próprio this,
 *  arguments, super ou new.target. Estas expressões de funções são melhor
 *  aplicadas para funções que não sejam métodos, e elas não podem ser usadas como
 *  construtoras (constructors).
 * 
 */

//Function
const helloWorld = function() {
  return "Hello World Adriana!";
};

//Arrow Function
const helloWorld2 = () => {
  return "Hello World Maria Eduarda!";
}

//Uma expressão Arrow function dispensa a implementação do return, quando a mesma
//tiver apenas uma instrução.
const helloWorld3 = () => "Hello World Eduardo!";

console.log(helloWorld());
console.log(helloWorld2());
console.log(helloWorld3());


//Caso exista apenas uma linha, pode dispensar as chaves e o return.
const soma = (a, b) => a + b;

//Caso exista apenas um parâmetro, pode dispensar os parênteses.
const eNumeroPar = a => a%2===0;

console.log(`4 + 5 = ${soma(4, 5)}`);
console.log(`É número par? ${eNumeroPar(6)}`);

//Arrow function NÃO faz hoisting, ou seja, é preciso declará-la antes de chamá-la. Exemplo:
//console.log(`2 * 3 = ${multiplicar(2, 3)}`);    //ReferenceError: Cannot access 'multiplicar' before initialization
const multiplicar = (a, b) => a * b;
console.log(`2 * 3 = ${multiplicar(2, 3)}`);      //Ok


/** OUTRAS RESTRIÇÕES DAS ARROW FUNCTIONS
 * 
 *      >>  "This" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar, como por exemplo:
 *          bind(), call() e apply(). Não use arrow functions para criar métodos;
 *      >>  Não existe o objeto "arguments";
 *      >>  O constructor (exemplo: new MeuObjeto()) também não pode ser utilizado.
 * 
 */
