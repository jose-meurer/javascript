let n = "global";

function mostraN() {
    let n = "local"
  console.log("valor de n: " + n);
}
mostraN();

console.log("valor de n: " + n);
