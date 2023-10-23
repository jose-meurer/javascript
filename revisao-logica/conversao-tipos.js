/* Converter string em numero */

let n1 = 10;
let n2 = "25.3123";
console.log(n1 * n2, typeof n1, typeof n2); // *, / , - funciona
console.log(n1 + n2, typeof n1, typeof n2); // + é usado para concatenação
console.log(n1 + parseFloat(n2), typeof n1, typeof n2);
// parseInt, parseFloat, Number()

n2 = "25dasdads323"; // Descartar todo o resto após a primeira letra
console.log(n1 + parseInt(n2)); 

n2 = Number(n2);
console.log(n1 + parseInt(n2)); // NaN = not a number

n2 = "oi";
console.log(n1 * n2); // NaN

/* Converter numero em string */

let n3 = 10;
n3 = n3 + "";
console.log(n3, typeof n3);

n3 = 35;
n3 = n3.toString(/* Posso passar a base de conversao, 10 = decimal, 16 = hexadecimal e 2 = binario */);
console.log(n3, typeof n3);
