const stringArr = ["Joao", "Maria", "Angelica", true, 1, 3, 5, false, undefined, null];

// arrString.sort();

//Simplesmente inverte a ordem dos itens do array, retornando o array modificado e alterando o original
let temp = stringArr.reverse();
console.log(stringArr);
console.log(temp);

//reduce recebe dois valores, sendo o primeiro um acumulador e o segundo o valor atual, funciona parecido com um forEach
//arr.reduce(callback (acumulador, valor) => { executa uma acao e retorna o acumulador}, 0 => recebendo um valor adicional que será o inicial), se nao receber valor inicial, o index 0 do array será o inicial e valor será index 1
const arr = [1, 2, 3, 5, 12];
let soma = arr.reduce((somador, valor) => {
  somador += valor;
  return somador;
}); //Se nao tiver valor inicial, o tipo do retorno do reduce será o tipo do index 0
console.log(arr);
console.log("soma do array: ", soma);

let arrToString = arr.reduce((concat, valorAtual) => {
  concat += valorAtual;
  return concat;
}, ""); //valor inicial string, retornará string
console.log(arr);
console.log("concat do array: ", arrToString);

const nomes = ["Daniel", "Maria", "Joana", "José"];
let nomesPorOrdem = nomes.reduce((obj, nomeAtual) => {
  let temp = nomeAtual[0];

  obj[temp] ? obj[temp]++ : (obj[temp] = 1);

  return obj;
}, {}); //valor inicial obj, retornará obj

console.log(nomes);
console.log(nomesPorOrdem);

//desafio retornar um array com numeros unicos

const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];
let numerosUnicos = numeros.reduce((acumulador, valorAtual, index, _arr) => {
  if (acumulador.indexOf(valorAtual) < 0) {
    acumulador.push(valorAtual);
  }

  return acumulador;
}, []);

console.log("Array original: ", numeros);
console.log("Array com numeros unicos: ", numerosUnicos);
