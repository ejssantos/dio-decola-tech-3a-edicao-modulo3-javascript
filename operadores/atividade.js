/*
    Este repositório contém a atividade prática do Curso "Sintaxe e Operadores",
    que faz parte do Basecamp de Javascript que minstrei pela Digital Innovation
    One.

    Atividade
      Crie uma função que recebe dois números como parâmetros.
      Confira se os números são iguais.
      Confira se a soma dos números é maior que 10 ou menor que 20.
      Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é
      soma, que é maior/menor que 10 e maior/menor que 20".
    
    Exemplo:

      Input: 1, 2
      Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e
      menor que 20.


    Links:

      https://github.com/stebsnusch/basecamp-javascript/tree/main/sintaxe-e-operadores

      https://web.dio.me/course/sintaxe-e-operadores/learning/be1eafaa-2817-41eb-b4d5-8c63d7b11c9e?back=/track/decola-tech-3a-edicao&tab=undefined&moduleId=undefined

*/

function compararValor(v1, v2){
  let n1 = Number(v1);
  let n2 = Number(v2);

  let mensagem = `Os números ${n1} e ${n2}`;
  let resultado = n1 + n2;

  if (n1 === n2){
    mensagem += ' são iguais.';
  } else {
    mensagem += ' não são iguais.';
  }

  mensagem += ` Sua soma é ${resultado}`;
  if (resultado == 10) {
    mensagem += ', que é igual a 10, logo é menor que 20.'; 
  } else if (resultado == 20) {
    mensagem += ', que é igual a 20, logo maior que 10.'; 
  } else if (resultado > 10 && resultado < 20) {
    mensagem += ', que é maior que 10 e menor 20.'; 
  } else if (resultado < 10 ) {
    mensagem += ', que é menor que 10, logo menor que 20.'; 
  } else {
    mensagem += ', que é maior que 20, logo maior que 10.'; 
  }

  console.log(mensagem);
}

let valor1 = prompt('Informe o valor 1: ');
let valor2 = prompt('Informe o valor 2: ');

compararValor(valor1, valor2);