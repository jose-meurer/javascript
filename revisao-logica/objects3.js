const product = {
  name: "Lapis",
  quantity: 15,
  buy: function (n) {
    console.log(this);

    if (n > this.quantity) {
      return `Só temos em estoque a quantidade de ${n} ${this.name}`;
    }

    this.quantity -= n;
    return `A compra de ${this.quantity} ${this.name} foi concluida.`;
  },
};

let compra = product.buy(11);
console.log(compra);

console.log("---------------------------------");

/* Diferenca entre function e arrow function com a palavra this */

const product1 = {
  name: "Pessoa1",
  idade: 66,
  fun1() {
    /* Forma resumida de fun1: function(){} */
    console.log(this); //retorna o proprio objeto
  },
  fun2: () => {
    console.log(this); //retorna o window
  },
};
console.log("--fun1--");
product1.fun1();

console.log("--fun2--");
product1.fun2();