//referencia ao espaco alocado na memoria
function alteraArray(x) {
  x.push("Alterado");
}

const arr = ["valor"];
console.log(arr);
alteraArray(arr);
console.log(arr);

//valor
function alteraPrimitivo(x) {
  x += " Alterado";
  console.log(`Valor dentro da function: ${x}`);
}
let s = "valor";
alteraPrimitivo(s);
console.log(`Valor fora da function: ${s}`);
