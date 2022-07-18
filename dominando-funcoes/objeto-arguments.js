/** Objeto "arguments"
 * 
 *  Um array com todos os parâmetros passados quando a função foi invocada.
 */

function findMax() {
  let max = -Infinity;

  for(let i = 0; i < arguments.length; i++) {
    if(arguments[i] > max) {
      max = arguments[i];
    }
  }

  return max;
}

console.log(findMax(1, 10, 5, 20, -3, 22, 15));


//Exibindo todos os argumentos
function showArgs() {
  return arguments;
}

console.log(showArgs(100, [2, 5, 7, 3], true, "Eduardo", Object));