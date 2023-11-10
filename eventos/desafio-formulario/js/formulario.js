(function () {
  "use strict";

  const txtTitulo = document.getElementById("txtTitulo");
  const btn = document.getElementById("btn");
  const formCadastro = document.querySelector(".formCadastro");

  /* Validacao titulo */

  formCadastro.addEventListener("submit", (e) => {
    if (!txtTitulo.value) {
      alert("Preencha todos os campos.");
      e.preventDefault();
      txtTitulo.focus();
    }
  }); //Boa pratica coloca evento no submit inves de click

  //   btn.addEventListener("click", (e) => {
  //     if (!txtTitulo.value) {
  //       alert("Preencha todos os campos.");
  //       e.preventDefault();
  //       txtTitulo.focus();
  //     }
  //   });

  /* Contador caracters */

  const txtDescricao = document.getElementById("txtDescricao");
  const contadorContainer = document.getElementById("contador");
  const restante = contadorContainer.getElementsByTagName("span")[0];
  const maximo = txtDescricao.maxLength;

  contadorContainer.style.display = "block";
  showScreen(restante, maximo);

  txtDescricao.addEventListener("input", checkLength);

  function checkLength() {
    let numeroLetrasDigitadas = this.value.length;
    let caractersRestantes = parseInt(maximo) - parseInt(numeroLetrasDigitadas);
    showScreen(restante, caractersRestantes);
  }

  function showScreen(element, n) {
    element.textContent = n;
  }

})();
