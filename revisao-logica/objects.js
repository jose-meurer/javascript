/* Forma antiga de criar um objeto */
const pessoa = new Object();
pessoa.nome = "José";
pessoa.idade = 26;

console.log(pessoa.nome);
console.log(pessoa.idade);

/* Forma literal de criar um objeto */
const pessoa1 = {
  nome: "Maria",
  idade: 31,
};

console.log(pessoa1.nome);
console.log(pessoa1.idade);


const arr = new Array();

arr.push(pessoa);
arr.push(pessoa1);
arr.push({ nome: "João", idade: 42 });

console.log(arr);

let p1 = arr[0];
console.log(p1, typeof p1);
/* Ambos sao obj */
let p2 = arr[2];
console.log(p2, typeof p2);
