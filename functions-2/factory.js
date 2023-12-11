function createDog(name) {
  let posicao = 0;

  return {
    name,
    latir() {
      console.log(this.name, "está latingo");
    },
    andar(distancia) {
      posicao += distancia;
      console.log(this.name, "andou", distancia, " metros");
    },
    getPosicao() {
        return posicao;
    }
  };
}

const bob = createDog("Bob");
bob.andar(10);
bob.andar(5);
console.log(bob.getPosicao());
console.log(bob);


const toto = createDog("Totó");
toto.andar(20);
toto.andar(-6);
console.log(toto.getPosicao());
