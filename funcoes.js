//Comentário de linha.

/*
    Comentário de várias
    linhas.
*/

const IMPOSTO = 0.17;
//var preco: Number;
//var desconto: Number;

var desconto = 0.2;
var preco = 2;
var total = preco - (preco * desconto);


function soma(a, b){
    //console.log(a + b);
    return a + b;
}

var valor_a = 10;
var valor_b = 5;
//console.log(a +" + "+ b +" = ", soma(10, 5));
console.log(valor_a +" + "+ valor_b +" = "+ soma(valor_a, valor_b));

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log("Os números pares são: ", evenNums);
}

let array = [1, 2, 4, 5, 7, 8];
console.log("Lista de valores: ", array);
returnEvenValues(array);