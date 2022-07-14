//  JavaScript é uma linguagem de tipagem dinâmica e fraca.
//  Uso de typeof
var checandoTipagem = () =>  {
  um = 'um';
  console.log(typeof(um));

  um = 1;
  console.log(typeof(um));
}

checandoTipagem();

//  Strings
//  Abaixo exemplo de Interpolação e Template Strings
let fullName = () => {
  let firstName = 'Eduardo';
  let lastName = 'Santos';

  return `Nome completo: ${firstName} ${lastName}`;
}

console.log(fullName());

//  Strings
let strings = () => {
  let firstName = 'Eduardo';
  let lastName = ' Santos';

  //concat
  console.log('Full name: ' + firstName.concat(lastName));

  //length
  console.log('firstName: ' + firstName);
  console.log('Tamanho da firstName: ' + firstName.length);

  //object
  let stringPrimitiva = 'Teste de string primitiva';
  let objeto = new String('Objeto');
  console.log(stringPrimitiva);
  console.log(typeof(stringPrimitiva));
  console.log(typeof(objeto));

  //Caractere de escape
  console.log('Adriana \n\n Medeiros');

  //split: separa os caracteres por argumentos
  let frase = 'Olá, tudo bem?';
  console.log(frase.split(""));
  console.log(frase.split(" "));
  console.log(frase.split(","));

  //includes: verifica se existe determinada palavra
  let frase2 = 'Um dia cheio de trabalho?';
  console.log(frase2.includes('vazio'));
  console.log(frase2.includes('cheio'));

  //startsWith
  console.log(frase2.startsWith('a'));
  console.log(frase2.startsWith('u'));
  console.log(frase2.startsWith('U'));

  //endsWith
  console.log(frase2.endsWith('.'));
  console.log(frase2.endsWith('?'));
  
  //replace: substitui caracteres em uma variável, e retorna a string modificada, mas não altera a variável.
  console.log(frase2.replace('?', '!'));
  console.log(frase2);
}

strings();