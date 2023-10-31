(function () {
  "use strict";

  function calcularIMC(altura, peso) {
    if (altura === undefined || peso === undefined) {
      throw Error("Está faltando valores.");
    }

    if (typeof altura !== "number" || typeof peso !== "number") {
      throw Error("Valores invalidos.");
    }
    
    return peso / (altura * altura);
  }

  function classificarIMC(imc) {
    if (altura === undefined || peso === undefined) {
      throw Error("Está faltando valores.");
    }

    if (typeof altura !== "number" || typeof peso !== "number") {
      throw Error("Valores invalidos.");
    }

    if (imc < 17) {
      return "Muito abaixo do peso.";
    } else if (imc < 18.5) {
      return "Abaixo do peso.";
    } else if (imc < 25) {
      return "Peso normal.";
    } else if (imc < 30) {
      return "Acima do peso.";
    } else if (imc < 35) {
      return "Obesidade Grau I.";
    } else if (imc < 40) {
      return "Obesidade Grau II.";
    } else {
      return "Obesidade Grau III.";
    }
  }

  console.log(calcularIMC(1.85, 100));
  console.log(classificarIMC(calcularIMC(1.9, 120)));
  console.log(classificarIMC(15));
})();
