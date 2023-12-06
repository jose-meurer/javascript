//funcao declarada pode ser chamada antes de ter sido criada

foo();

function foo() {
  console.log("Qualquer coisa na tela.");
}

//O mesmo nao ocorre com function express, só pode ser chamada depois de ter sido criada

foo1();
const foo1 = function () {
  console.log("Qualquer outra coisa na tela.");
};