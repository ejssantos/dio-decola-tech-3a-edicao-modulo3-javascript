//Numbers

let numbers = () => {
  //Math
  console.log(typeof(Math));
  console.log('PI = ' + Math.PI);

  //Math.floor: trunca
  console.log(Math.floor(1.666666666666));

  //Math.floor: arredonda para inteiro (para cima).
  console.log(Math.ceil(1.666666666666));
  console.log(Math.ceil(1.4444444444));

}

numbers();

//
let percent = () => {
  //let percentual = 10%;   //  Isso não existe em JavaScript (SyntaxError: Unexpected token ';').
  let percentual = 10;
  
  //return percentual + '%';
  //return percentual.toString() + '%';
  
  return `${percentual}%`;
}

console.log(percent());