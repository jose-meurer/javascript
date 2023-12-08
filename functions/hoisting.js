//funcao declarada pode ser chamada antes de ter sido criada

foo();

function foo() {
  console.log("Qualquer coisa na tela.");
  const x = 999;
  // printValue(); Retorna erro, pois ele está com referencia no x global, que ainda nao foi inicializado, como tem escopo lexico, nao computa o x declarado dentro da funcao
}

//O mesmo nao ocorre com function express, só pode ser chamada depois de ter sido criada

// foo1();
const foo1 = function () {
  console.log("Qualquer outra coisa na tela.");
};


let x = 10;

x = 20;

function printValue() {
  console.log(x);
}

function fn() {
  let x = 44;
  printValue();
}

printValue();
fn();
