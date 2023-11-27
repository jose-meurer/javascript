(function () {
  function getRandomNumber(inicio = 0, fim = 10, integer = true) {
    let numero = Math.random() * (fim - inicio + 1) + inicio;

    if (integer) {
      numero = Math.floor(numero);
    }
    return numero;
  }
  console.log(getRandomNumber(30, 20, false));
})();
