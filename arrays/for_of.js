const arr = [1, 3, 5];

const pessoa = {
    nome: "José",
    idade: 16,
    email: "jose@mail.com",
    pais: "Brazil"
}

/* Ambos semelhantes ao laço for ou forEach
    for in recomendado para objetos e for of para arrays
*/

for (const props in pessoa) {
    console.log(pessoa[props]);
    console.log(pessoa);
}

for (const iterator of arr) {
    console.log(iterator);
}

//Similar ao for in
let temp = Object.keys(pessoa); //retorna um objeto com o nome das propriedades de pessoa
console.log(typeof temp, temp, "\n")
temp.forEach((x) => {
 console.log(x);
 console.log(pessoa[x]);
})