// Principais: strings, number (int, float), boolean
// undefined, null, symbol(ES2015)

/* Strings */

let var1 = "minha 'string' com aspas simples";
let var2 = 'minha "string" com aspas duplas';
// let var3 = "minha \"string\" com aspas duplas";
let var4 = `minha template literal`; //ES2015
console.log(var4);

let idade = 50;
let msg = "eu possuo " + idade + " anos"; /* concatenação simples */
msg = `eu possuo ${idade} anos`; /* recomendado, concatenação com template liretal */
console.log(msg);
console.log(typeof msg, typeof idade, typeof var4); /* Verificar tipo variavel = typeof */

/* Numbers */

let n1 = 10;
let n2 = 1.1;
console.log(`o tipo do n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo do n1 é ${typeof n2} e seu valor é ${n2}`);

/* Booleanos */

let n3 = 10;
let isValid = 10 == 100;
console.log(isValid);

/* Undefined */

// Quando se cria uma variavel e não atribui nenhum valor, é undefined

let varTest;
console.log(varTest);
console.log(typeof varTest);

varTest = 45;
console.log(typeof varTest, varTest);

/* Null */

let varNull;
console.log(typeof varNull, varNull);

varNull = null;
console.log(typeof varNull, varNull); /* Irá retornar que null é OBJ, mas é erro do JS, não foi resolvido até hoje, pois quebraria muitos sites */
