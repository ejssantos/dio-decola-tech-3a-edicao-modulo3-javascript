// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

//let input = gets().split(" "); 
let n, x, y; 

//n =  parseInt(input[0]); 
n = prompt('Informe o valor de n (n > 0 e N < 10000):');
//x =  parseInt(input[1]);
x = prompt('Informe o valor de x (x > 0):');
//y =  parseInt(input[2]); 
y = prompt('Informe o valor de y (y < 100):');

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let resultado = parseInt(n)/(parseInt(x) + parseInt(y)); 
//print(resultado.toFixed(2));
alert(`Resultado: ${resultado.toFixed(2)}`);