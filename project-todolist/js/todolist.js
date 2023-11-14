(function () {
  "use stict";

  /* Armazenar o dom em variaveis */

  const itemInput = document.getElementById("item-input");
  const todoAddForm = document.getElementById("todo-add");
  const ul = document.getElementById("todo-list");
  //   const lis = ul.getElementsByTagName("li");

  //Array de objs de task
  let arrTasks = [
    {
      name: "task 1",
      createAt: Date.now(),
      completed: false,
    },
    {
      name: "task 2",
      createAt: Date.now(),
      completed: false,
    },
  ];

  //evento de submit da task
  todoAddForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(itemInput.value); //innerHTML nao é muito confiavel e tem desempenho pior
    renderTasks();

    itemInput.value = "";
    itemInput.focus();
  });

  renderTasks();

  //Adiciona uma nova task no array
  function addTask(task) {
    arrTasks.push({
      name: task,
      createAt: Date.now(),
      completed: false,
    });
  }

  //mostra as task no dom
  function renderTasks() {
    ul.innerHTML = "";
    arrTasks.forEach((taskObj) => {
      ul.appendChild(generateLiTask(taskObj));
    });
  }

  //Cria uma nova li e retorna
  function generateLiTask(obj) {
    const li = document.createElement("li");
    li.setAttribute("class", "todo-item");
    const p = document.createElement("p");
    p.setAttribute("class", "task-name");
    p.textContent = obj.name;
    li.appendChild(p);

    addEventLi(li);

    return li;
  }

  //Adiciona evento de click nas li
  function addEventLi(li) {
    li.addEventListener("click", (e) => {
      console.log(e.target.className);
    });
  }
})();
