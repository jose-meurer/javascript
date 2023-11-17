const n = 10; //Valor

function changeN(x) {
  x++;
  console.log("in: ", x);
}
changeN(n);
console.log("out: ", n);

/* ---- */

const arr = [10]; //Refencia na memoria

function changeArr(x) {
  x.push(11);
  console.log("in: ", x);
}
changeArr(arr);
console.log("out: ", arr);

/* ---- */

const str = "10"; //Valor

function changeStr(x) {
  x += x;
  console.log("in: ", x);
}
changeStr(str);
console.log("out: ", str);

/* ---- */

const obj = { number: 10 }; //Refencia na memoria

function changeObj(x) {
  x.number = 12;
  console.log("in: ", x);
}
changeObj(obj);
console.log("out: ", obj);
