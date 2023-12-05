(function () {
  document.body.classList.remove("no-js");

  window.addEventListener("scroll", addClassOnScroll);

  addClassOnScroll();

  function addClassOnScroll() {
    const dataShowContainer = [...document.querySelectorAll("[data-addclass-on-scroll]")];

    if (dataShowContainer.length === 0) {
      window.removeEventListener("scroll", addClassOnScroll);
    }

    dataShowContainer.forEach((container) => {
      if (checkPosition(container)) {
        addClassWithTimeout(container);
        removeAttributes(container);
      }
    });

    function checkPosition(container) {
      const positionBottomImagemScreen = container.getBoundingClientRect().bottom;
      const sizeWindowY = window.innerHeight;

      return positionBottomImagemScreen <= sizeWindowY;
    }

    function addClassWithTimeout(container) {
      const delay = container.getAttribute("data-addclass-on-scroll-delay");
      const className = container.getAttribute("data-addclass-on-scroll");

      if (delay) {
        setTimeout(() => container.classList.add(className), delay);
      } else {
        container.classList.add(className);
      }
    }

    function removeAttributes(container) {
      container.removeAttribute("data-addclass-on-scroll");
      container.removeAttribute("data-addclass-on-scroll-delay");
    }
  }
})();
