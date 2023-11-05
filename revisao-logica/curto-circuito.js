// let n = 0;
// if (!n) {
//   n = 10;
// }
// console.log(n);

let n = 0;
n = n || 10;
console.log(n);

let isValid = false
;

// if(isValid) {
//     console.log("É valido.")
// }

isValid && console.log("É valido."); 
/* Pode funcionar como um if e else */
isValid || console.log("Não é valido.");

isValid || console.log("É valido.");
