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
  console.log(this); // Esse this será o objeto

  function _test() {
    console.log("declaration: " + this); //Undefined, pois o this é dinamico
  }

  _test();

  const _testArrow = () => {
    console.log("arrow: " + this); //Ainda será o objeto
  };

  _testArrow();
}

obj2.fnTestThis();
