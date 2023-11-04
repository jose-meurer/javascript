const arr = [1, 3, 5, 7, "Feijão", false];

//every retorna true se todos do array retornarem true, e retorna false se todos/algum retornar false;
let apenasNumeros = arr.every(function (x, i, _arr) {
  return typeof x === "number";
});
console.log(`--every--`);
console.log(apenasNumeros);

//some retorna true se pelo menos um elemento do aray retornar true;
apenasNumeros = arr.some((x, i, _arr) => {
    return typeof x === "boolean";
});
console.log(`--some--`);
console.log(apenasNumeros);

//funcionar similar ao for ou while;
console.log(`--forEach--`);
arr.forEach((x) => {
    console.log(x);
});

//retorna um novo array com os elementos que retornarem true;
const arr2 = arr.filter((x) => {
    return typeof x === "number";
});
console.log(`--filter--`);
console.log(arr2);

//Para cada elemento do errei, executa a function;
const arr3 = arr2.map((x) => {
    return x * x;
});
console.log(`--map--`);
console.log(arr3);
