//Declaracao de funcao
function f1() {
  console.log("Hello World!!!");
}

f1();

//expressao de funcao
const f2 = function () {
  //function é criada com const e nao com let
  console.log("expressao de funcao");
};

f2();

// arrow function
const f3 = () => {
  console.log("arrow function");
};

let s = "arrow function with parameters";
const f4 = (x) => {
  console.log(x);
};
f4(s);

// retorno de valores
function f5() {
  return new Date().getDay();
}

let dia = f5();
console.log(dia);

function sum(n1 = 0, n2 = 0) {
  //   let _n1 = n1 || 0;
  //   let _n2 = n2 || 0;
  return n1 + n2;
}

let soma = sum(5, 6);
console.log(soma);
console.log(sum(9, 7));
console.log(sum(9, 7, 9, 2, 3));
console.log(sum(9));
console.log(sum());
