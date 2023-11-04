const arr = [1, 2, 3];
const arr2 = [5, 6, 7];

console.log(arr.toString(), typeof arr.toString());

//join é semelhante ao .toString, mas pode receber por parametro uma string que será utilizada para separar os elemento, exemplo: " - ";
console.log(arr.join(" / "), typeof arr.join());

//junta os arrays, parecido com o concat do sql;
const arr3 = arr.concat(arr2, 4, 8, [true, 66, "Hello world!"]);
console.log(arr3);

//Uma maneira de clonar um array, sem ser apenas uma referencia;
const arr4 = [].concat(arr3);

arr3.push("novo valor");

console.log(arr3);
console.log(arr4);
