/** Parâmetros: Valores Padrão
 * 
 */

//Pré EcmaScript 2015
function exponencial(array, expoente) {
  if (expoente === undefined) {
    expoente = 1;
  }

  const result = [];

  for(let i = 0; i < array.length; i++){
    result.push(array[i] ** expoente);
  }

  return result;
}

console.log(exponencial([1, 2, 3, 4]));
console.log(exponencial([1, 2, 3, 4], 4));


//Pós EcmaScript 2015
//O exemplo abaixo já contempla o valor padão no parâmetro da função, tornando o
//código mais enxuto e dispensando a verificação anterior.
function exponencial2(array, expoente = 1) {
  const result = [];

  for(let i = 0; i < array.length; i++){
    result.push(array[i] ** expoente);
  }

  return result;
}

console.log(exponencial2([1, 2, 3, 4]));
console.log(exponencial2([1, 2, 3, 4], 4));