const arr = [1, 3, 4, 5, "Mundo", true];
console.log("--array--");
console.log(arr);

console.log()

//Adiciona novos elementos no final do array e retorna o novo length
let tamanho = arr.push(10, "Brazil", 15);
console.log("--push--");
console.log(tamanho);
console.log(arr);

console.log()

//Retorna o ultimo elemento do array e deleta ele
let ultimo = arr.pop();
console.log("--pop--");
console.log(ultimo);
console.log(arr);

console.log()

//Retorna o primeiro elemento do array e deleta ele
let primeiro = arr.shift();
console.log("--shift--");
console.log(primeiro);
console.log(arr);

console.log()

//Adiciona novos elementos no inicio do array
tamanho = arr.unshift(2, 6);
console.log("--unshift--");
console.log(tamanho);
console.log(arr);

console.log()

//Funciona similar a subtring, retornando uma nova array recortada até o ultimo numero informado -1
const arr2 = arr.slice(4, 8);
console.log("--slice--\n");
console.log("array 1", arr);
console.log("array recortado com slice", arr2);

console.log()

//Funciona similar a substring, mas o primeiro valor indica o index que irá comecar, o segundo quantos elemento serão removidos e depois novos elementos que serão adicionados no lugar onde aconteceu o recorte, retornando um novo array com os elementos removidos e alterando o array original
const arr3 = arr.splice(2, 4, "Japao", 10, 20, 100);
console.log("--splice--");
console.log("arr ", arr);
console.log("arr3 ", arr3);
