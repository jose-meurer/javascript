function falar() {
  console.log( this.name + " emite: 'Au au'");
}

const dog = {
  name: "Jhon",
  latir() {
    console.log(this.name + " au au");
  },
  falar,
  uivar: function() {
    console.log(this.name + " " + "Auuuuuuuuuuuuuuuuuuuu")
  }
};

dog.latir();
dog.falar();
dog.uivar();

/* Maneiras de criar/chamar uma funcao no objeto */