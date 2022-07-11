//  var x let x const

/**
 *  var é utilizado para declarar variáveis de escopo global.
 *  let é utilizado para dec declarar variáveis de escopo em bloco.
 *  const é utilizado para declarar constantes.
 * 
 *  Hoisting é o termo utilizado quando você consegue atribuir um valor a uma variável, antes de declarar o tipo de dado da mesma.
 */

// var x let
function testeVar() {
  var a = 1;
  var b = 2;

  if (a===1) {
    //Mas se remover a palavra-chave var, a variável fará referência a posição de memória à primeira de declaração de a.
    var a = 11;
    let b = 22;

    console.log(a);     //11
    console.log(b);     //22
  }

  console.log(a);       //11
  console.log(b);       //2
}

testeVar();

//  Uso de Hoisting
//  var permite hoisting, enquanto let não.
function testeHoisting() {
  a = 1;
  b = 2;

  console.log('Teste de Hoisting (a): ' + a);
  console.log('Teste de Hoisting (b): ' + b);

  var a;
  //let b;  //ReferenceError: Cannot access 'b' before initialization
}

testeHoisting();