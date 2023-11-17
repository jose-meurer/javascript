const obj1 = {
  nome: "José",
  idade: 16,
};
console.log(obj1);

const obj2 = new Object();
obj2.name = "João";
obj2["idade"] = 20;

console.log(obj2);

const str = "minha string";
console.log(str);
console.log(str.length); //js converter por um momento o primitivo para obj para usar funcoes de obj

const str2 = new String("minha string tipo obj");
console.log(str2);
console.log(str2.length);


//Datas

const data1 = Date(); //string
console.log(data1)
console.log(typeof data1);

const data2 = new Date(); //obj
console.log(data2);
console.log(typeof data2);

//Funcoes que só tenho no date tipo obj

console.log(data2.getTime()); //ms desde 01/01/1970-00:00:00 até agora
console.log(data2.getDay()); //domingo é index 0
console.log(data2.getMonth()); //meses comeca em index 0
