let idade = 21;
let paisPresentes = false;
let comprouTicket = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouTicket;
console.log(`Pode viajar: ${podeViajar}`);

let msgMaiorIdade = idade >= 18 ? "É maior de idade" : "É menor de idade";
// if (idade >= 18) {
//   msgMaiorIdade = "É maior de idade";
// } else {
//   msgMaiorIdade = "É menor de idade";
// }
console.log(msgMaiorIdade);

if (!comprouTicket) {
  console.log("Nao comprou o ticket.");
} else if (idade >= 18) {
  console.log("É maior de idade, pode viajar.");
} else {
  console.log("Menor de idade, nao pode viajar.");
}

let n1 = 6;
let n2 = 7;
let media = (n1 + n2) / 2;
console.log(`media ${media}`);

if (n1 === 0 || n2 === 0) {
  console.log("Reprovado!!!");
} else if (media >= 7) {
  console.log("Aprovado!!!");
} else {
  console.log("Abaixo da media, mas ainda dá tempo de recuperar!!!");
}
