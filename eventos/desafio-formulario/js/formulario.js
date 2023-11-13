(function () {
  "use strict";

  const txtTitulo = document.getElementById("txtTitulo");
  const btn = document.getElementById("btn");
  const formCadastro = document.querySelector(".formCadastro");

  /* Validacao titulo */

  formCadastro.addEventListener("submit", (e) => {
    if (!txtTitulo.value) {
      showErrorMessage("Preencha todos os campos.", () => txtTitulo.focus());
      e.preventDefault();
    }
  }); //Boa pratica coloca evento no submit inves de click




  //   btn.addEventListener("click", (e) => {
  //     if (!txtTitulo.value) {
  //       alert("Preencha todos os campos.");
  //       e.preventDefault();
  //       txtTitulo.focus();
  //     }
  //   });



  

  /* feedbackMessage */

  const feedbackMessage = document.getElementById("feedbackMessage");
  const feedbackMessageCloseBtn = feedbackMessage.querySelector("button");

  //Mostra mensagem de erro
  function showErrorMessage(msg, cb) {
    // alert(msg);
    //Nao é uma boa pratica usar essa abordagem, pois mata as classes existentes no elemento
    // feedbackMessage.setAttribute("class", "show");

    feedbackMessage.classList.add("show");
    feedbackMessage.firstElementChild.textContent = msg;

    feedbackMessageCloseBtn.focus();

    //esconde mensagem de erro
    function hideErrorMessage() {
      feedbackMessage.classList.remove("show");

      //remove os eventos para nao duplicar
      feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage);
      feedbackMessageCloseBtn.removeEventListener("keyup", pressedKeyboardOnBtn);

      if (typeof cb === "function") {
        cb();
      }
    }

    function pressedKeyboardOnBtn(e) {
      if (e.keyCode === 27) {
        hideErrorMessage();
      }
    }

    feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage);
    feedbackMessageCloseBtn.addEventListener("keyup", pressedKeyboardOnBtn);
  }

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

  /* Desabilitar/habilitar botao pelo checkbox */

  const chkAceito = document.getElementById("chkAceito");

  btn.disabled = true;

  chkAceito.addEventListener("change", () => {
    btn.disabled = !chkAceito.checked;
  });
})();
