(function () {
  window.addEventListener("scroll", positionImage);

  const dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")];

  positionImage();

  dataParalaxContainer.forEach((container) => backgroundNoRepeat(container));

  function backgroundNoRepeat(container) {
    container.style.backgroundRepeat = "no-repeat";
  }

  dataParalaxContainer.forEach(container => container.style.backgroundRepeat = "no-repeat");

  function isGettingOut(container) {
    return container.getBoundingClientRect().top <= 0;
  }

  function getNewPosition(container) {
    const vel = parseFloat(container.getAttribute("data-p-velocity")) || 0.5;
    return container.getBoundingClientRect().top * vel * -1; //Multiplicar por -1 deixa o valor positivo novamente
  }

  function positionImage() {
    dataParalaxContainer.forEach((c) => {
      let originalPositionX = getComputedStyle(c).backgroundPositionX;

      if (isGettingOut(c)) {
        c.style.backgroundPosition = `${originalPositionX} ${getNewPosition(c)}px`;
      } else {
        c.style.backgroundPosition = `${originalPositionX} 0px`;
      }
    });
  }
})();
