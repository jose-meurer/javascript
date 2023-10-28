/* Iterar objects */

const pessoa = {
  nome: "José",
  idade: 11,
  email: "jose@gmail.com",
};
console.log(pessoa);

for(let prop in pessoa) {
    console.log(pessoa[prop]);
}