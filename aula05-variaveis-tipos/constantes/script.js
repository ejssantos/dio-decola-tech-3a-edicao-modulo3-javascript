/**
 *  Constantes
 * 
 *  >>  Declarada em SNAKE_UPPER_CASE
 *  >>  Escopo de bloco
 *  >>  Não faz hoisting
 */

//Não é permitido alterar o valor de uma constante e nem redeclará-la.
function testandoConstante() {
  const FIRST_NAME = 'Eduardo';
  
  //FIRST_NAME = 'Ricardo';     //Não permitido alterar o valor de uma constante. TypeError: Assignment to constant variable.
  //const FIRST_NAME = 'Ricardo'; //Não é permitido redeclarar uma constante. SyntaxError: Identifier 'FIRST_NAME' has already been declared
  
  console.log(FIRST_NAME);
}

//testandoConstante();

//Constante não permite hoisting
function testandoConstante2() {
  FIRST_NAME = 'Eduardo';
  
  console.log(FIRST_NAME);

  //const FIRST_NAME;  //SyntaxError: Missing initializer in const declaration
}

//testandoConstante2();


//Constante não permite reatribuição.
function testandoConstante3() {
  //Constante exige declaração e atribuição na mesma linha.
  const FIRST_NAME = 'Eduardo';

  //const FIRST_NAME;
  //FIRST_NAME = 'Eduardo';   //SyntaxError: Missing initializer in const declaration
  
  console.log(FIRST_NAME);
}

testandoConstante3();