function somar() {
    console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
//arguments é muito semelhante a um array
console.log(somar(1, 2, 5, 10, 81, 50, 13, 11, 2));


//arguments não funciona com arrow functions
const foo = () => {
    console.log(arguments);
};
foo();
