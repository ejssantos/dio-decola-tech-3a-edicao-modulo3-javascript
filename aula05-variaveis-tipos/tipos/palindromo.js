/**
 * Palíndromo
 * 
 *    Palíndromo é uma palavra, frase ou número que permanece igual quando lida de trás para diante. Por extensão,
 *    palíndromo é qualquer série de elementos com simetria linear, ou seja, que apresenta a mesma sequência de
 *    unidades nos dois sentidos.
 * 
 * Exercício:
 * 
 *    Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
 *    
 *    Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa
 *    (ex.: raiar, ama, ovo, radar).
 */

//Solução 1
let verificaPalindromo = (string) => {
  if (!string) return 'string inexistente';
  return string.split("").reverse().join("") === string;
};

console.log('<<< Solução 1 >>>');
console.log(verificaPalindromo('ovo'));
console.log(verificaPalindromo('gato'));
console.log(verificaPalindromo('roma me tem amor'));
console.log(verificaPalindromo());


//Solução 2
console.log('<<< Solução 2 >>>');
let verificaPalindromo2 = (string) => {
  if (!string) return 'string inexistente';

  let resultado = true;
  for(let i = 0; i < string.length/2; i++){
    if(string[i] !== string[string.length - 1 - i]){
      resultado = false;
    }
  }

  return resultado;
};

console.log(verificaPalindromo2('ovo'));
console.log(verificaPalindromo2('gato'));
console.log(verificaPalindromo2('roma me tem amor'));
console.log(verificaPalindromo2());