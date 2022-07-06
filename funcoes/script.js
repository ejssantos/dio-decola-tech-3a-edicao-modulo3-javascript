//  Função
function funcao() {
  console.log('Função funcionou.');
}

funcao();

//  Função com parâmetros
function imprimir(mensagem) {
  console.log(mensagem);
}

imprimir('Função com parâmetros impressa com sucesso.');

/*
    Tipos de Funções

      >>  Funções declarativas

            São funções que possuem o uso mais comum, devem ser declaradas usando
            a palavra reservada "function" seguida do nome da função, parênteses
            "()" e cgaves "{}".

            Sintaxe geral:

              function nomeDaFuncao() {
                //instrução
              }

            Neste caso, o nome da função é obrigatório.

      >>  Expressões de Funções

            São funções atribuídas à expressões. A nomeação das funções por expressão é opcional.
            Exemplo:

              var funcao = function nomeDaFuncao(){
                //instrução
              }

              ou

              var funcao = function() {
                //instrução
              }

      >>  Arrow Function

            São funções de expressão de sintaxe curta. Arrow functions sempre
            serão anônimas, e portanto não podem ser nomeadas. Devem ser
            declaradas com parênteses "()", seguido de "=>" e depois chaves "{}".

            Exemplo:

              var funcao = () => {
                //instrução
              }
*/

var funcaoArrowFunction = () => {
  console.log('Sou uma arrow function!');
}

funcaoArrowFunction();