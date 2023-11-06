/* .call() recebe como primeiro parametro o this e depois os argumentos separados
 *  .apply() muito parecido com o call, mas podendo passar os argumentos como array e internamente virando um obj
 */

const arr = [3, 5, 6, 19];

function sum() {
  //   const tempArray = [];

  //   Array.prototype.forEach.call(arguments, (x) => {
  //     tempArray.push(x);
  //   });

  //   return tempArray.reduce((sum, value) => {
  //     return (sum += value);
  //   }, 0);

  return Array.prototype.reduce.call(
    arguments,
    (sum, value) => {
      return (sum += value);
    },
    0
  );
}
console.log(sum(...arr));

function avg() {
  return sum.apply(undefined, arguments) / arguments.length;
}
console.log(avg(...arr));

//Me tirou muitas duvidas

function print() {
  // arguments["D"] = 1;
  console.log(arguments);
  console.log(arguments["1"], "\n"); //Passado por apply se comporta como um obj
}
console.log("Chamada simples:");
print(arr);

console.log("Chamada call:");
print.call(undefined, arr);

console.log("Chamada apply:");
print.apply(undefined, arr);

console.log("Chamada apply:");
print.apply(undefined, Array.prototype.flat.call([1, 3, 4, 5, 6, 10, [3, 5, 6, 7, 11,[9, 6, 3, 2,1]]], Infinity)); 
//Array dentro de array continua array, mas para resolver isso temos o flat(), valor padrao sendo 1, 1 = Só irá separar a primeira camada do array, Infinity = todos os arrays sendo serao um unico array, nao importa a quantidade de camadas
