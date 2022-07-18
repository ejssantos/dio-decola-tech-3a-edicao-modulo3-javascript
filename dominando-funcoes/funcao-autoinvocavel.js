/** Função Autoinvocável
 * 
 *  Também conhecida como IIFE (Immediatelly Invoked Function Expression) 
 * 
 *  Uma Função Autoinvocável é uma função anônima entre parênteses, seguida por outro par de parênteses,
 *  que representa sua chamada.
 * 
 *  
 * 
 *  Exemplo:
 */
 let resultado = (
  function() {
    let x = 3;
    let y = 4;

    //console.log(`3 + 4 = ${x + y}`);
    return x + y;
  } 
)();

console.log(`Resultado: ${resultado}`);

//Função Autoinvocável (continuação)
//Esse tipo de função pode ser utilizada com parâmetros ou armazenda em uma variável.
let resultado2 = (
  function(x, y) {
    return x + y;
  } 
)(3, 4);
console.log(`Resultado2: ${resultado2}`);