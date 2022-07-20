/** Bind
 * 
 *  O método bind() clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.
 *  
 *  Function.prototype.bind()
 *  O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido,
 *  com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é
 *  chamada.
 * 
 *  Links:
 *      https://web.dio.me/course/dominando-funcoes-em-javascript/learning/8b713d82-f56e-4cde-b10d-8552a0eac233?back=/track/decola-tech-3a-edicao&tab=undefined&moduleId=undefined
 *      https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 * 
 *  Exemplo:
 */

const retornaNomes = function() {
  return this.nome;
};

let eduardo = retornaNomes.bind({nome: 'Eduardo'});

console.log(eduardo());