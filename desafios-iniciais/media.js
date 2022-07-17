// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

//var a = parseFloat(gets());
var a = prompt('Informe o valor de a:');

//var b = parseFloat(gets());
var b = prompt('Informe o valor de b:');

//TODO: Complete os espaços em branco com uma possível solução para o desafio

var media = ((parseFloat(a) * 3.5) + (parseFloat(b) * 7.5))/11;

//print("MEDIA = " + media.toFixed(5));
alert(`MEDIA = ${media.toFixed(5)}`);