(function () {
  function calcularMedia() {

    if (arguments.length <= 0) {
      return 0;
    }

    let total = 0;
    for (let i = 0; i < arguments.length; i++) {

      if (typeof arguments[i] !== "number") {
        throw Error(`A nota na posicao ${i + 1} é invalida.`);
      }

      total += arguments[i];
    }

    return total / arguments.length;
  }
  console.log(calcularMedia());
  console.log(calcularMedia(5, 6, 4, 7, 3, 10, 4.5));
//   console.log(calcularMedia(5, 6, 4, "7", 3, 10, 4.5));
})();
