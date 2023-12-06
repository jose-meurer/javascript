function test(str) {
  console.log("function declarations test");
  return "fn declarations " + str;
}

const t1 = test("Parametro");
console.log(t1);

const testArrow = () => {
  console.log("Arrow function test");
  return "fn arrow";
};

const t2 = testArrow();
console.log(t2);

const apenasUmaLinhaArrow = (str) => "Arrow function response " + str;

const t3 = apenasUmaLinhaArrow("Parametro teste");
console.log(t3);

//Se passar sem os (), o interpretador vai entender os {} do objeto como espoco do metodo
const testArrow2 = () => ({
  foo: "bar",
});

const t4 = testArrow2();
console.log(t4);
console.log(t4.foo);
console.log(t4["foo"]);

console.log(testHoisting());

//Vai dar erro, como vai chamar uma const que ainda nao foi declarada(O codigo é lido de cima para baixo)?
console.log(constFnHoisting);

function testHoisting() {
  return "function declarations ok";
}

const constFnHoisting = function () {
  return "function expression ok";
};
