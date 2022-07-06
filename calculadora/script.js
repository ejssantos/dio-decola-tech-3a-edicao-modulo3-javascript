/*  Criando uma calculadora

    Para este exercício vamos utilizar alguns métodos nativos do JavaScript:

      >>  Number()            Para converter valores em números;
      >>  Prompt()            Para registrar entradas de usuário;
      >>  Alert()             Para mostrar mensagem ao usuário;
      >>  Template Strings    Para usar strings junto com expressões.

    Link: https://github.com/DianaMartine/curso-dio-sintaxe-basica-javascript
*/

function calculadora() {
  
  let resultado;
  let n1;
  let n2;
  
  const operacao = prompt(`
    Escolha uma operação:
      \n [  + ] Soma
      \n [  - ] Subtração
      \n [  * ] Multiplicação
      \n [  / ] Divisão Real
      \n [  % ] Divisão Inteira
      \n [ ** ] Potenciação
  `);

  function fornecerDados() {
    n1 = Number(prompt('Insira o primeiro valor:'));
    n2 = Number(prompt('Insira o segundo valor:'));
  }

  function somar() {
    fornecerDados();
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
  }

  function subtrair() {
    fornecerDados();
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
  }

  function multiplicar() {
    fornecerDados();
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
  }

  function dividir() {
    fornecerDados();
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
  }

  function dividirInteiro() {
    fornecerDados();
    resultado = n1 % n2;
    alert(`${n1} % ${n2} = ${resultado}`);
  }

  function potenciar() {
    fornecerDados();
    resultado = n1 ** n2;
    alert(`${n1} ** ${n2} = ${resultado}`);
  }

  var novaOperacao = () => {
    let opcao = prompt(`
      Deseja fazer outra operação?
        \n (S)im
        \n (N)ão
    `);

    if (opcao.toUpperCase() == 'S') {
      calculadora();
    } else if (opcao.toUpperCase() == 'N') {
      alert('Encerrando calculadora...');
    } else {
      alert('Digite uma opção válida.')
      novaOperacao();
    }
  } 

  switch(operacao) {
    case '+':
      somar();
      break;
    case '-':
      subtrair();
      break;
    case '*':
      multiplicar();
      break;
    case '/':
      dividir();            //Divisão Real
      break;
    case '%':
      dividirInteiro();    //Divisão inteira
      break;
    case '**':
      potenciar();
      break;
    default:
      alert('Operação inválida');
  }
    
  novaOperacao();

  //console.log(operacao);
}

calculadora();

