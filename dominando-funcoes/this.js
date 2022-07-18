/** This
 * 
 *  A palavra reservada this é uma referência de contexto.
 * 
 *  contexto                  Referência
 *  ==================================================================
 *    Em um objeto (método)     Próprio objeto dono do método
 *    Sozinha                   Objeto global (em navegadores, window)
 *    Função                    Objeto global
 *    Evento                    Elemento que recebeu o evento
 *  ==================================================================
 * 
 */

const pessoa = {
  id: 1
  , firstName: 'Eduardo'
  , lastName: 'Santos'
  , fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  , getId: function() {
      return this.id;
    }
};

console.log(pessoa.fullName());
console.log(pessoa.getId());