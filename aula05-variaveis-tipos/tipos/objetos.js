/**
 * Objetos
 * 
 * É uma estrutura do tipo chave e valor.
 */

//Inicialização simples de um objeto.
let obj = {};

//Confirmando o tipo de dado.
console.log(`Tipo de dado de obj: ${typeof obj}`);

//Exemplo de objeto
let pessoa = {
  nome: 'Eduardo'
  , dataNascimento: '25/10/1978'
  , sexo: 'Masculino'
};

//Aqui sobrescreve o conteúdo anterior.
pessoa = {nome: 'Adriana', dataNascimento: '08/12/1981', sexo: 'Feminino'};

console.log(pessoa);

//Visualizando os valores do objeto.
console.log(`Object.values(pessoa): ${Object.values(pessoa)}`);

//Visualizando as chaves do objeto.
console.log(`Object.keys(pessoa): ${Object.keys(pessoa)}`);

//Acessando chave e valor ou atribuindo dado.
pessoa.nome = 'Maria Eduarda';
console.log(pessoa.nome);

pessoa['nome'] = 'Adriana';
console.log(pessoa['nome']);

//Adicionando chave e valor a um objeto.
pessoa['profissao'] = 'Assistente Social';
pessoa.cpf = '012.345.678-90';

//Outra forma de atribuir chave e valor.
let end = 'endereco';
pessoa[end] = 'Loteamento Encontro do Mar';

console.log(pessoa);