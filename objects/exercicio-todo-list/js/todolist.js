; (function () {
    "use strict"

	function Task(name, completed, createdAt, updatedAt){
		// crie uma funcao construtora chamada Task. 
        // essa funcao recebe por parametro obrigatório o nome da tarefa
        // também recebe tres parametros opcionais (completed, createdAt, updatedAt)
        // o objeto retornado por essa funcao deve ter quatro propriedades:
        //  - name - string - obrigatório, 
        //  - completed - boolean - opcional, false é o default, 
        //  - createdAt - timestamp - opcional, timestamp atual é o valor default) 
        //  - updatedAt - timestamp - opcional, null é o valor default
        // o objeto retornado por essa funcao deve ter um método chamado toggleDone, que deve inverter o boolean completed

        emptyMessage(name);

        let _name = name;
        let _createdAt = createdAt || Date.now();
        let _updatedAt = updatedAt || null;
        let _completed = completed || false;

        this.changeName = function (name) {
            emptyMessage(name);

            _name = name;
            update();
        }
        this.getName = function () {
            return _name;
        }

        this.getCreatedAt = function() {
            return _createdAt;
        }

        function update() {
            _updatedAt = Date.now();
        }

        this.getUpdatedAt = function() {
            return _updatedAt;
        }

        this.getCompleted = function() {
            return _completed;
        }

        this.toggleDone = function () {
            _completed = !_completed;
            update();
        }

        this.saveData = function () {
            return {name: _name, completed : _completed, createdAt : _createdAt, updatedAt : _updatedAt};
        }

        function emptyMessage(obj) {
            if(!obj.trim()) {
                window.alert("Nome da tarefa não pode ser vazia");
                throw new Error("Nome da tarefa não pode ser vazia");
            }
        }
	}

	let arrTasks = getSavedLocalStorage();

    function getSavedLocalStorage() {
        let tasks = localStorage.getItem("tasks")
        tasks = JSON.parse(tasks);
        return tasks && tasks.length ? tasks : [
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
            {
                name: "Tarefa 3",
                createAt: Date.now(),
                completed: false,
            }
        ]
    }

    function setSaveLocalStorage() {
        const arrStorage = arrInstancesTasks.map(task => {
            return task.saveData();
        })
        localStorage.setItem("tasks", JSON.stringify(arrStorage));
    }

    // a partir de um array de objetos literais, crie um array contendo instancias de Tasks. 
    // Essa array deve chamar arrInstancesTasks
	const arrInstancesTasks = arrTasks.map(task => {
        return new Task(task.name, task.completed, task.createdAt, task.updatedAt);
    })

    //ARMAZENAR O DOM EM VARIAVEIS
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")
    const lis = ul.getElementsByTagName("li")

    function generateLiTask(obj) {
        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")

        li.className = "todo-item"

        checkButton.className = "button-check"
        checkButton.innerHTML = `
            <i class="fas fa-check ${obj.getCompleted() ? "" : "displayNone"}" data-action="checkButton"></i>`
        checkButton.setAttribute("data-action", "checkButton")

        li.appendChild(checkButton)

        p.className = "task-name"
        p.textContent = obj.getName();
        li.appendChild(p)

        editButton.className = "fas fa-edit"
        editButton.setAttribute("data-action", "editButton")
        li.appendChild(editButton)

        const containerEdit = document.createElement("div")
        containerEdit.className = "editContainer"
        const inputEdit = document.createElement("input")
        inputEdit.setAttribute("type", "text")
        inputEdit.className = "editInput"
        inputEdit.value = obj.getName();

        containerEdit.appendChild(inputEdit)
        const containerEditButton = document.createElement("button")
        containerEditButton.className = "editButton"
        containerEditButton.textContent = "Edit"
        containerEditButton.setAttribute("data-action", "containerEditButton")
        containerEdit.appendChild(containerEditButton)
        const containerCancelButton = document.createElement("button")
        containerCancelButton.className = "cancelButton"
        containerCancelButton.textContent = "Cancel"
        containerCancelButton.setAttribute("data-action", "containerCancelButton")
        containerEdit.appendChild(containerCancelButton)

        li.appendChild(containerEdit)

        deleteButton.className = "fas fa-trash-alt"
        deleteButton.setAttribute("data-action", "deleteButton")
        li.appendChild(deleteButton)

        return li
    }

    function renderTasks() {
        ul.innerHTML = ""
        arrInstancesTasks.forEach(taskObj => {
            ul.appendChild(generateLiTask(taskObj))
        });
    }

    function addTask(task) {
        // adicione uma nova instancia de Task
        arrInstancesTasks.push(new Task(task));
        renderTasks();
    }

    function clickedUl(e) {
        const dataAction = e.target.getAttribute("data-action")
        console.log(e.target)
        if (!dataAction) return

        let currentLi = e.target
        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }
        const currentLiIndex = [...lis].indexOf(currentLi)

        const actions = {
            editButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");

                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                });
            
                editContainer.style.display = "flex";

                editContainer.querySelector(".editInput").focus();
            },
            deleteButton: function () {
                arrInstancesTasks.splice(currentLiIndex, 1)
                renderTasks();
                setSaveLocalStorage();

            },
            containerEditButton: function () {
                const val = currentLi.querySelector(".editInput").value
                arrInstancesTasks[currentLiIndex].changeName(val)
                renderTasks()
                setSaveLocalStorage();
            },
            containerCancelButton: function () {
                currentLi.querySelector(".editContainer").removeAttribute("style")
                // currentLi.querySelector(".editInput").value = arrInstancesTasks[currentLiIndex].getName();
            },
            checkButton: function () {

                // DEVE USAR O MÉTODO toggleDone do objeto correto
                arrInstancesTasks[currentLiIndex].toggleDone();
	            renderTasks();
                setSaveLocalStorage();
            }
        }
        
        if (actions[dataAction]) {
            actions[dataAction]()
        }

        if([...lis].indexOf(currentLi) !== -1){
            currentLi.querySelector(".editInput").value = arrInstancesTasks[currentLiIndex].getName();
        }
        
    }

    todoAddForm.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(itemInput.value)
        addTask(itemInput.value)
        renderTasks()
        setSaveLocalStorage();

        itemInput.value = ""
        itemInput.focus()
    });

    ul.addEventListener("click", clickedUl)

    renderTasks()

    setSaveLocalStorage();
})();