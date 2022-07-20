/** Apply
 * 
 *  O método apply() chama uma função com um dado valor this e arguments providos como uma array (ou um objeto parecido com um array).
 *  
 *  Nota: A sintaxe desta função é quase idêntica a essa da call(), a diferença é que call() aceita uma lista de argumentos, enquanto
 *  apply() aceita um array de argumentos.
 * 
 *  Links:
 *      https://web.dio.me/course/dominando-funcoes-em-javascript/learning/8b713d82-f56e-4cde-b10d-8552a0eac233?back=/track/decola-tech-3a-edicao&tab=undefined&moduleId=undefined
 *      https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Apply
 * 
 *  Exemplo:
 */

 const myObj = {
  num1: 2
  , num2: 4
};

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [2, 5]);