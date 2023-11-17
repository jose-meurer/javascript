function Task(name) {
  "use strict";

  if (this === undefined) return;

  let _name = name; //Funciona semelhante as classes e atributos no java, private String name

  this.createdAt = new Date();
  this.updatedAt = null;
  this.changeName = function (newName) {
    if (newName) {
      _name = newName.trim();
      this.updatedAt = new Date();
    }
  };
  this.getName = function () {
    return _name;
  };
}

const task1 = new Task("Tarefa 1");
task1.changeName("Tarefa 1 atualizada");

const task2 = new Task("Tarefa 2");

console.log(task1);
console.log(task1.getName());

console.log(task2);
console.log(task2.getName());
