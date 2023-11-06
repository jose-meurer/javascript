const arr = [10, 20, 30, 40, 50, 60];

//armazena os valores do array em variavel, seguindo de forma linear o index do array e mantendo o array original;
//Para pular uma posicao usar virgula com espaco vazio "`n1, ,n2", assim, pegando os elemento do index 0 e 2;
const [, n2, n3] = arr;

//retorna para variaveis o elemento de index 0 no n4 e o resto do array para o n5 usando spread operator;
let [n4, , ...n5] = arr;

console.log(n2);
console.log(n3);
console.log(arr);

console.log(n4);
console.log(n5);
console.log(arr);
