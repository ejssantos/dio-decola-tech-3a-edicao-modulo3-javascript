/** Objetos
 *  Object Destructuring
 * 
 *  Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.
 */

const user = {
  id: 43
  , displayName: 'esantos'
  , fullName: {
    firstName: 'Eduardo'
    , lastName: 'Santos'
  }
};

const user2 = {
  id: 40
  , displayName: 'amedeiros'
  , fullName: {
    firstName: 'Adriana'
    , lastName: 'Medeiros'
  }
};

function userId({id}) {
  return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
  return `${first} ${last}`;
}

console.log(userId(user));
console.log(getFullName(user));