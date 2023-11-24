function formatarNome(nomeCompleto) {
  const nome = nomeCompleto.trim();
  const lengthPrimeiroNome = nome.indexOf(" ");
  if (lengthPrimeiroNome > -1) {
    const primeiroNome = nome.slice(0, lengthPrimeiroNome);
    const restoNome = nome.slice(lengthPrimeiroNome).trim();
    return `${restoNome}, ${primeiroNome}`;
  }
  return nome;
}

console.log(formatarNome("José")); //José
console.log(formatarNome("José Walter")); //Walter, José
console.log(formatarNome("José Walter Meurer")); //Walter Meurer, José

console.log("\nCom split()")

function formatarNomeComSplit(nomeCompleto) {
  const nome = nomeCompleto.trim();
  const nomeArray = nomeCompleto.split(" ");
  if (nomeArray.length === 1) return nome;

  let primeiroNome = nomeArray.shift();

  return `${nomeArray.join(" ")}, ${primeiroNome}`;
}
console.log(formatarNomeComSplit("José")); //José
console.log(formatarNomeComSplit("José Walter")); //Walter, José
console.log(formatarNomeComSplit("José Walter Meurer")); //Walter Meurer, José
