//criar um array com numeros randomicos nao repetidos
function generateRandomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

const arr = [];
while (arr.length < 20) {
  let randomInteger = generateRandomInteger(30);
  arr.indexOf(randomInteger) < 0 ? arr.push(randomInteger) : console.log(`Valor já existe no array: ${randomInteger}`);
}
console.log(arr);
