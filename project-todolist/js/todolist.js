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
  function renderTasks() { //problema desempenho muitos elementos
    ul.innerHTML = "";
    arrTasks.forEach((taskObj) => {
      ul.appendChild(generateLiTask(taskObj));
    });
  }

  //Cria uma nova li e retorna
  function generateLiTask(obj) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const checkButton = document.createElement("button");
    const showCheck = document.createElement("i");
    const editButton = document.createElement("i");
    const containerEdit = generateEditContainerTask();
    const deleteButton = document.createElement("i");
    
    li.classList.add("todo-item");

    checkButton.classList.add("button-check");
    showCheck.className = "fas fa-check displayNone"; //className pode passar em uma unica string
    checkButton.appendChild(showCheck);
    li.prepend(checkButton);
    
    p.classList.add("task-name");
    p.textContent = obj.name;
    li.appendChild(p);

    editButton.classList.add("fas", "fa-edit");
    li.appendChild(editButton);

    li.appendChild(containerEdit);

    deleteButton.classList.add("fas", "fa-trash-alt"); //classList precisa separar as classes
    li.appendChild(deleteButton)

    addEventLi(li);

    return li;
  }

  //Cria a caixa flutuante de editar a task
  function generateEditContainerTask() {
    const containerEdit = document.createElement("div")
    const inputEdit = document.createElement("input");
    const buttonEdit = document.createElement("button");
    const buttonCancel = document.createElement("button");


    containerEdit.classList.add("editContainer");

    inputEdit.type = "text";
    inputEdit.classList.add("editInput");
    containerEdit.appendChild(inputEdit);

    buttonEdit.classList.add("editButton");
    buttonEdit.textContent = "Edit";
    containerEdit.appendChild(buttonEdit);

    buttonCancel.classList.add("cancelButton");
    buttonCancel.textContent = "Cancel";
    containerEdit.appendChild(buttonCancel);

    return containerEdit;
  }

  //Adiciona evento de click nas li
  function addEventLi(li) {
    li.addEventListener("click", (e) => {
      console.log(e.target.className);
    });
  }
})();
