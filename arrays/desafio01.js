const arr = [[5, 3, 6, 2, 9], 2, 3, [5, 7, 3]];
const arr2 = [3, 4, 6, 7];

let n1 = sum(arr2);
console.log(n1);

n1 = avg(arr);
console.log(n1);

function sum() {
  arguments = argumentsFilter(arguments);

  return arguments.reduce((sum, x) => {
    return (sum += x);
  }, 0);
}

function avg() {
  arguments = argumentsFilter(arguments);

  return sum(arguments) / arguments.length;
}

//array.flat() retorna um novo array concatenando todos(Infinity) os array em um unico array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

function argumentsFilter(x) {
  return Array.prototype.flat.call(x, Infinity);
}
