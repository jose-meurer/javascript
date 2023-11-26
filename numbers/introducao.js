let numero = 1234567.89;

console.log(numero.toFixed(2), typeof numero.toFixed()); //Após o ponto
console.log(numero.toPrecision(8), typeof numero.toPrecision(1)); //Todos os digitos

console.log((123).toPrecision(9));

numero = 12.34567;
console.log(numero.toExponential());
console.log(numero.toExponential(4)); //Recebe o numero de casas

numero = 19;

console.log(numero.toString(), typeof numero.toString()); //19
console.log(numero.toString(2), typeof numero.toString()); //10011
console.log(numero.toString(8), typeof numero.toString()); //2*8=16+3=19 = 23
console.log(numero.toString(16), typeof numero.toString()); //13

numero = 123456.789;

console.log(numero.toLocaleString("en-US"));
console.log(numero.toLocaleString("pt-BR"));

console.log(numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
console.log(numero.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log(numero.toLocaleString("pt-PT", { style: "currency", currency: "EUR" }));
console.log(numero.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }));

console.log(Number.MAX_VALUE); //Propriedades só disponiveis chamando a classe construtora
console.log(Number.MIN_VALUE);

console.log(Number.isInteger(321));
console.log(Number.isInteger("321"));

console.log(Number.isFinite(321));
console.log(Number.isFinite("321")); //Verifica se é typeof number e se é finito

console.log(isFinite(321));
console.log(isFinite("321")); //Verifica se o numero é finito

let numberAsString = "3.321";

console.log(isNaN(numberAsString));
console.log(Number.isNaN(numberAsString));

numberAsString = "a54.23";

console.log(isNaN(numberAsString), parseFloat(numberAsString));

console.log(isNaN(numberAsString)); //Se conseguir converter de string para number, retornará false
console.log(Number.isNaN(parseFloat(numberAsString))); //Só retorna true se realmente for NaN
