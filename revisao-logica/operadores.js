// = - * / % **

let n1 = 10;
let n2 = 3;

/* OPERADORES ARITMÉTICOS */

console.log(n1 + n2); //adição
console.log(n1 - n2); //subtração
console.log(n1 * n2); //multiplicação
console.log(n1 / n2); //divisao
console.log(n1 % n2); //resto
console.log(n1 ** n2); //potencia

let n3 = n1 / n2;
console.log(n3.toFixed(2)); //reduz as casas decimais depois do ponto

/* OPERADORES DE ATRIBUIÇÃO */

let n4 = 20;
// n3 = n3 + 15;
n4 += 15;
console.log(n4);

/* OPERADORES DE INCREMENTO E DECREMENTO */

let i = 0;
i++;
console.log(i);
console.log(++i);
i = 0;
i--;
console.log(i);
console.log(--i);

/*  OPERADORES DE COMPARAÇÃO 

    igualdade de valor ==
    igualdade de valor e tipo ===
    <, >, <=, >=
    sinal de diferença !=
    sinal de valores e tipos diferentes !==
*/

console.log(n1, n2, n4);
let n5 = "10";
console.log(n1 == n5);
console.log(n1 === n5, typeof n1, typeof n5); //valores iguais mas tipos diferentes

console.log(n2 < n5);
console.log(n2 > n5);

console.log(n1 <= n5);
console.log(n1 >= n5 + 1);

console.log(n1 != n5);
console.log(n1 !== n5, typeof n1, typeof n5); //valores iguais mas tipos diferentes

/*  OPERADORES LÓGICOS
    AND(&&), OR(||) e NOT(!)
*/

let idade = 21;
let paisPresentes = false;
let comprouTicket = false;
/* Funciona igual ao calc, o && tem preferencia, colocar os valores a serem calculados primeiro dentro de () */
let liberado = (idade >= 18 || paisPresentes) && comprouTicket; 
/* Como paisPresentes é um booleano, nao precisa de paisPresentes === true */
console.log(`Pode viajar: ${liberado}.`);
