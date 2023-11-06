const arr = [1, 3, 5, 7];

// Spread sao esses 3 pontinhos, quebrando o array e passando cada elemento como parametro para a funcao
console.log("Passando com spread: ", sum(...arr));
console.log("Passando um arrya normal: ", sum(arr));

function sum(n1, n2, n3, n4) {
  return n1 + n2 + n3 + n4;
}

//Serve tambem para unir 2 arrays

const arr2 = [1, 3, 4, 8];
const arr3 = [2, 12, 22, 28];

arr2.push(arr3);
console.log(arr2); //[ 1, 3, 4, 8, [ 2, 12, 22, 28 ] ]

arr2.pop();

arr2.push(...arr3);
console.log(arr2); //[ 1,  3,  4,  8, 2, 12, 22, 28]
