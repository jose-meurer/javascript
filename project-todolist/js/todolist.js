(function () {
  "use stict";

  /* Armazenar o dom em variaveis */

  const itemInput = document.getElementById("item-input");
  const todoAddForm = document.getElementById("todo-add");
  const ul = document.getElementById("todo-list");
  const lis = ul.getElementsByTagName("li");

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

    if (!itemInput.value) {
      alert("Mensagem Vazia"); //Melhorar
      return;
    }

    addTask(itemInput.value);
    renderTasks();

    itemInput.value = "";
    itemInput.focus();
  });

  ul.addEventListener("click", eventUl);

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
    //problema desempenho muitos elementos
    ul.innerHTML = ""; //innerHTML nao é muito confiavel e tem desempenho pior
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
    const deleteButton = document.createElement("i");
    const containerEdit = generateEditContainerTask();

    li.classList.add("todo-item");

    checkButton.classList.add("button-check");
    checkButton.setAttribute("data-action", "checkButton");
    showCheck.className = "fas fa-check displayNone"; //className pode passar em uma unica string
    checkButton.appendChild(showCheck);
    li.prepend(checkButton);

    p.classList.add("task-name");
    p.textContent = obj.name;
    li.appendChild(p);

    editButton.classList.add("fas", "fa-edit");
    editButton.setAttribute("data-action", "editButton");
    li.appendChild(editButton);

    li.appendChild(containerEdit);

    deleteButton.classList.add("fas", "fa-trash-alt"); //classList precisa separar as classes
    deleteButton.setAttribute("data-action", "deleteButton");
    li.appendChild(deleteButton);

    return li;
  }

  //Cria a caixa flutuante de editar a task
  function generateEditContainerTask() {
    const containerEdit = document.createElement("div");
    const inputEdit = document.createElement("input");
    const containerSaveButton = document.createElement("button");
    const containerCancelButton = document.createElement("button");

    containerEdit.classList.add("editContainer");
    containerEdit.setAttribute("data-action", "editContainer");

    inputEdit.type = "text";
    inputEdit.classList.add("editInput");
    containerEdit.appendChild(inputEdit);

    containerSaveButton.classList.add("editButton");
    containerSaveButton.setAttribute("data-action", "containerSaveButton");
    containerSaveButton.textContent = "Save";
    containerEdit.appendChild(containerSaveButton);

    containerCancelButton.classList.add("cancelButton");
    containerCancelButton.setAttribute("data-action", "containerCancelButton");
    containerCancelButton.textContent = "Cancel";
    containerEdit.appendChild(containerCancelButton);

    return containerEdit;
  }

  //Eventos de click da ul
  function eventUl(e) {
    const dataAction = e.target.getAttribute("data-action");
    if (!dataAction) return; //retona undefined

    let currentLi = e.target;
    while (currentLi.nodeName.toLowerCase() != "li") {
      currentLi = currentLi.parentElement;
    }

    const currentLiIndex = Array.from(lis).indexOf(currentLi);

    const actions = {
      editButton: () => {
        const editContainer = currentLi.querySelector("[data-action = 'editContainer']");
        [...ul.querySelectorAll("[data-action = 'editContainer']")].forEach((x) => {
          x.removeAttribute("style");
        });
        editContainer.style.display = "flex";
      },
      deleteButton: () => {
        arrTasks = arrTasks.filter((x) => {
          if (arrTasks.indexOf(x) !== currentLiIndex) {
            return x;
          }
        });
        renderTasks(); //é mais custoso, porem menor chance de dessincronização
      },
    };


    actions[dataAction] && actions[dataAction]();
  }
})();
