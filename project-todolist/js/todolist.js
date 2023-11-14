(function () {
  "use stict";

  /* Armazenar o dom em variaveis */

  const itemInput = document.getElementById("item-input");
  const todoAddForm = document.getElementById("todo-add");
  const ul = document.getElementById("todo-list");
  const lis = ul.getElementsByTagName("li");

  //evento de submit da task
  todoAddForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(itemInput.value); //innerHTML nao é muito confiavel e tem desempenho pior

    itemInput.value = "";
    itemInput.focus();
  });

  [...lis].forEach((li) => addEventLi(li));

  //Cria uma nova task no dom
  function addTask(task) {
    const li = document.createElement("li");
    li.setAttribute("class", "todo-item");
    const p = document.createElement("p");
    p.setAttribute("class", "task-name");
    p.textContent = task;
    li.appendChild(p);
    ul.appendChild(li);

    addEventLi(li);
  }

  //Adiciona evento de click nas li
  function addEventLi(li) {
    li.addEventListener("click", (e) => {
      console.log(e.srcElement.classList);
    });
  }
})();
