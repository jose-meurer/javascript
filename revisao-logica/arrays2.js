/* Iterar arrays */

const nomes = ["João", "Maria", "José", "Helena"];

for (let i = 0; i < nomes.length; i++) {
  console.log(`O nome de index ${i} é ${nomes[i]}`);
}

nomes.forEach((nomes) => {
  console.log(`O nome é ${nomes}`);
});
//or
for (let i of nomes) {
  console.log(`O nome é ${i}`);
}
