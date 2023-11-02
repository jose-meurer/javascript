(function () {
  // const username = "José";
  const username = "";

  const _element = document.querySelector(".top-bar p");
  if (username) {
    _element.innerHTML += `<em>${username}</em>`;
  } else {
    // _element.parentElement.style.display = "none";
    /* const filho = pai.children; //Recupera o elemento filho
    console.log(pai);
    console.log(filho); */
    
    const _elementToRemove = _element.parentElement; //Recupera o elemento pai
    //pai.remove(); //Nao funciona no explorer11
    _elementToRemove.parentElement.removeChild(_elementToRemove);
  }
})();