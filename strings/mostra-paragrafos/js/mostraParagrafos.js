(function () {
  const paragrafos = [...document.querySelectorAll(".card p")];
  const originTexts = paragrafos.map((p) => p.innerText);
  const maxLength = 100;

  paragrafos.forEach((p, index) => {
    if (p.innerText.length > maxLength) {
      p.textContent = p.innerText.substring(0, maxLength) + "...";

      const btn = document.createElement("button");
      btn.innerHTML = `<i class="fas fa-chevron-down"></i>`;
      p.parentElement.classList.add("text-hidden");

      btn.addEventListener("click", (e) => {
        toggleText(e, p, index);
      });

      p.parentElement.append(btn);
    }
  });

  function toggleText(e, p, index) {
    const card = e.currentTarget.parentElement;

    card.classList.toggle("text-hidden");
    e.currentTarget.querySelector("i").classList.toggle("fa-chevron-down");
    e.currentTarget.querySelector("i").classList.toggle("fa-chevron-up");

    if (card.classList.contains("text-hidden")) {
      p.textContent = p.innerText.substring(0, maxLength) + "...";
    } else {
      p.textContent = originTexts[index];
    }

    console.log(p.innerHTML)
    console.log(p.innerText)
  }
})();
