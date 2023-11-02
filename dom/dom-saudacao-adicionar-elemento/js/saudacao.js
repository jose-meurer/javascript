(function () {
  function randomLogUser() {
    let n = Math.floor(Math.random() * 2);

    if (n) {
      return "José";
    } else {
      return "";
    }
  }
  const username = randomLogUser();

  if (username) {
    const topBarElement = document.createElement("div");
    topBarElement.className = "top-bar";
    topBarElement.innerHTML = `<p>Bem-vindo, <b>${username}</b></p>`;

    const elementDad = document.querySelector(".hero");
    elementDad.insertBefore(topBarElement, elementDad.firstElementChild);
  }
})();
