/* 

Solucao ruim, porque vaza variaveis e funcoes para o espoco global

let isValid = true;

function init() {
  let isValid = true;
  console.log("init menu", isValid);
}

*/

//Funcao auto invocavel

(function () {
    let isValid = true;
    console.log("menu", isValid);
  
    function init() {
      console.log("init do menu");
    }
    init();
  })();