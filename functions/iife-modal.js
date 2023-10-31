/* 

Solucao ruim, porque vaza variaveis e funcoes para o espoco global

let isValid = false;

function init() {
  let isValid = false;
  console.log("init modal", isValid);
}

*/

//Funcao auto invocavel

(function () {
  let isValid = true;
  console.log("modal", isValid);

  function init() {
    console.log("init do modal");
  }
  init();
})();
