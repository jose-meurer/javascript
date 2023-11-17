(function () {
  "use stict";

  /* Armazenar o dom em variaveis */

  const itemInput = document.querySelector("#item-input");
  const todoAddForm = document.getElementById("todo-add");
  const ul = document.getElementById("todo-list");
  const lis = ul.getElementsByTagName("li");

  //Array de objs de task
  let arrTasks = getSavedData();

  //evento de submit da task
  todoAddForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (emptyMsgFeedback(itemInput.value)) {
      return;
    }
    addTask(itemInput.value);
    renderTasks();
    setNewData();

    itemInput.value = "";
    itemInput.focus();
  });

  ul.addEventListener("click", eventUl);

  renderTasks();

  //recupera tasks do localStorage
  function getSavedData() {
    let tasksData = localStorage.getItem("tasks");
    tasksData = JSON.parse(tasksData);

    if (!tasksData || !tasksData.length) {
      return [
        {
          name: "Tarefa 1",
          createAt: Date.now(),
          completed: false,
        },
        {
          name: "Tarefa 2",
          createAt: Date.now(),
          completed: true,
        },
      ];
    }

    return tasksData;
  }

  //salva a array atualizada no localStorage
  function setNewData() {
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
  }

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
    showCheck.className = `fas fa-check ${obj.completed ? "" : "displayNone"}`; //className pode passar em uma unica string
    showCheck.setAttribute("data-action", "checkButton");
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
    inputEdit.setAttribute("name", "editInput");
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

  function emptyMsgFeedback(value) {
    if (!value.trim()) {
      alert("Não pode inserir uma tarefa sem nome");
      return true;
    }
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

    const editInput = currentLi.querySelector(".editInput");
    const editContainer = currentLi.querySelector("[data-action = 'editContainer']");
    const actions = {
      checkButton: () => {
        arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed;
        renderTasks();
        setNewData();
      },
      editButton: () => {
        [...ul.querySelectorAll("[data-action = 'editContainer']")].forEach((container) => {
          container.removeAttribute("style");
        });
        editInput.value = arrTasks[currentLiIndex].name;
        editContainer.style.display = "flex";
      },
      containerSaveButton: () => {
        if (emptyMsgFeedback(editInput.value)) {
          return;
        }
        arrTasks[currentLiIndex].name = editInput.value;
        renderTasks();
        setNewData();
      },
      containerCancelButton: () => {
        editContainer.removeAttribute("style");
      },
      deleteButton: () => {
        arrTasks = arrTasks.filter((x) => {
          if (arrTasks.indexOf(x) !== currentLiIndex) {
            return x;
          }
        });
        renderTasks(); //é mais custoso, porem menor chance de dessincronização
        setNewData();
      },
    };

    actions[dataAction] && actions[dataAction]();
  }
})();
