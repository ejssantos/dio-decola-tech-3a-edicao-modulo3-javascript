/** Call
 * 
 *  O método call() invoca uma função com um dado valor this e argumentos passados individualmente.
 *  Com o método call(), você pode escrever um método que pode ser usado em diferentes objetos.
 * 
 *  Exemplo:
 */

const pessoa = {
  nome: 'Eduardo'
  , dataNascimento: '25/10/1978'
  , sexo: 'Masculino'
};

const animal = {
  nome: 'Bela'
  , dataNascimento: '10/04/2007'
  , sexo: 'Fêmea'
};

function getNome() {
  console.log(this.nome);
}

getNome.call(pessoa);
getNome.call(animal);


//É possível passar parâmetros para essa função separando-os por vírgulas. Exemplo:
const myObj = {
  num1: 2
  , num2: 4
};

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 2, 5);