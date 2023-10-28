const nomes = ["José", "Daniel", "Maria"];
const pessoa = { nome: "José", idade: 55 };

const pessoas = [
  {
    nome: "José",
    idade: 33,
  },
  {
    nome: "Maria",
    idade: 66,
  },
  {
    nome: "Rodrigo",
    idade: 21,
  },
  {
    nome: "Moises",
    idade: 12,
  },
];

pessoas.forEach((pessoas) => {
  console.log(`Se chama ${pessoas.nome} e tem ${pessoas.idade} anos.`);
});
