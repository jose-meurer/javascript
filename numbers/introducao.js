let numero = 1234567.89;

console.log(numero.toFixed(2), typeof numero.toFixed()); //Após o ponto
console.log(numero.toPrecision(8), typeof numero.toPrecision(1)); //Todos os digitos

console.log((123).toPrecision(9));

numero = 12.34567;
console.log(numero.toExponential());
console.log(numero.toExponential(4));//Recebe o numero de casas
