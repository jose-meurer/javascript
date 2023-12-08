
const str = "global string";

function teste() {
  const str = "local string";
  console.log(str);
  console.log(this);
}

// teste();

const test2 = () => console.log("Arrow function", this);

const obj = {
  foo: "bar",
  teste,
  test2,
};

obj.teste();

obj.test2();

console.log("\n\n\n");

/*  O this no javascript é dinamico, seu valor é determinado pelo contexto.
    Exemplos: 
    Em um método de objeto, this se refere ao objeto.

    Sozinho, this se refere ao objeto global.

    Em uma função, this se refere ao objeto global.

    Em uma função, no modo estrito, this é indefinido.

    Em um evento, this se refere ao elemento que recebeu o evento.

    Métodos como call(), apply(), e bind() podem referir this a qualquer objeto.

    Por outro lado, uma declaração de função (function declaration) não é dinâmica em si, mas a maneira como ela é chamada pode afetar o valor de this dentro dela.
*/

const obj2 = {
  name: "José",
  idade: 26,
  fnTestThis,
};

function fnTestThis() {
  "use strict"
  console.log(this); // Esse this será o objeto

  function _test() {
    //Undefined, pois o this é dinamico e estou usando 'use strict'
    console.log("declaration: "); 
    console.log(this);
  }

  _test();

  const _testArrow = () => {
    console.log("arrow: "); //Ainda será o objeto
    console.log(this)
  };

  _testArrow();
}

obj2.fnTestThis();
