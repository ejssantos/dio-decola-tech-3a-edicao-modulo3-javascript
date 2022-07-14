/**
 * Empty, undefined e null
 * 
 *    empty         --> Uma maneira explícita (intencional) de definir uma string vazia. Exemplo: var one = '';
 * 
 *    undefined     --> Quando uma variável não recebe nenhum valor.
 * 
 *    null          --> Uma maneira explícita (intencional) de definir a ausência de um valor.
 * 
 *  Fonte: https://scontent.ffor8-1.fna.fbcdn.net/v/t39.30808-6/210457964_1478614225804279_4968280177525418740_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8024bb&_nc_ohc=FprOb5gJ55cAX-Z_H__&_nc_ht=scontent.ffor8-1.fna&oh=00_AT_nuOjp10GZ6pEdSPr5t9mWE2G-oRSJ_vbPJVvMtlHdng&oe=62D5F6B2
 */

//abacaxi;
//console.log(typeof abacaxi);    //ReferenceError: abacaxi is not defined

//undefined
let pepino;
console.log(typeof pepino);       //undefined

//empty
let nome = '';
console.log(nome);
console.log(typeof nome);

//null
let idade = null;
console.log(idade);
console.log(typeof idade);
//null nem é true nem false, é nulo.
console.log(`idade === true: ${idade === true}`);
console.log(`idade === false: ${idade === false}`);

//falsy value é um valor falso, embora o retorno seja true.
//Link: https://www.freecodecamp.org/news/falsy-values-in-javascript/
console.log(`!idade: ${!idade}`);
