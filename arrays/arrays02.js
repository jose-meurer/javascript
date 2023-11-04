const arr = [4, 5, 10, 20, 35, 1, 6, 5];

//retorna o index do primeiro valor encontrado;
let index = arr.indexOf(5);
console.log("--first--");
console.log(index);

//Ambos retornam -1 se nao tiver o elemento no array;

//retorna o index do ultimo valor encontrado;
index = arr.lastIndexOf(5);
console.log("--last--");
console.log(index);

//retorna true se estiver na lista ou false se nao estiver;
index = arr.includes(555);
console.log("--includes--");
console.log(index);

//retorna o primeiro elemento que der true para a function ou undefined caso nenhum;
index = arr.find((x) => {
  return x > 10;
});
console.log("--find--");
console.log(index);

//retorna o index do primeiro elemento que retornar true ou -1 caso nenhum;
index = arr.findIndex((x) => {
  return x > 10;
});
console.log("--findIndex--");
console.log(index);
