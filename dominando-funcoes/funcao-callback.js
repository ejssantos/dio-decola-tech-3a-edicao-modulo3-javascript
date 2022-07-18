/** Função Callback
 * 
 *  É uma função passada como argumento para outra.
 * 
 *  Utilizando callbacks, o programador tem maior controle da ordem de chamadas.
 * 
 *  Exemplo:
 */

const calc = function(operacao, num1, num2) {
  return operacao(num1, num2);
}

const somar = function(num1, num2) {
  return num1 + num2;
}

const subtrair = function(num1, num2) {
  return num1 - num2;
}

var resultadoSoma = calc(somar, 1, 2);
var resultadoSubtracao = calc(subtrair, 1, 2);

console.log(`Resultado da soma: ${resultadoSoma}`);
console.log(`Resultado da Subtração: ${resultadoSubtracao}`);