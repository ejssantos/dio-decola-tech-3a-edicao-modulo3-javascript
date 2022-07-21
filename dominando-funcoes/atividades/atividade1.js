/**
 *  Atividade 1: Alunos Aprovados
 * 
 *    1.  Crie uma função que recebe o array alunos e um número que irá representar a média final;
 *    2.  Percorra o array e popule um novo array auxiliar, apenas com os alunos cujas notas são maiores ou iguais à média final;
 *    3.  Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
 */

const alunos = [
  {
    nome: 'Maria Eduarda'
    , nota: 9
    , escolaridade: 'Superior incompleto'
  }
  , {
      nome: 'Adriana Medeiros'
      , nota: 5
      , escolaridade: 'Superior completo'
    }
  , {
      nome: 'Eduardo José'
      , nota: 8
      , escolaridade: 'Pós graduado'
    }
];

function alunosAprovados(array, media) {
  let aprovados = [];

  for (let index = 0; index < array.length; index++) {
    /*O if abaixo foi substituído para dar lugar ao uso da técnica "object destructuring".
    if (array[index].nota >= media) {
      aprovados.push(array[index].nome);
    }
    */

    //Utilizando a técnica "object destructuring"...
    const {nota, nome} = array[index];

    if (nota >= media) {
      aprovados.push(nome);
    }
  }

  return aprovados;
}

console.log(alunos, 7);
console.log('Aprovados');
console.log(alunosAprovados(alunos, 7));