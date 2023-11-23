/*  
    replace(),      replaceAll(),
    indexOf(),      lasIndexOf(),   includes(),
    slice(),        substring(),    split(),
    toLowerCase(),  toUpperCase(),
    valueOf(),      toString(),
    trim(),         trimEnd(),      trimStart(),
    padStart(),     padEnd(),
    startsWith(),   endsWith(),
    charAt(),       charCodeAt(),   length
*/

/* replace and replaceAll */

let str = "Era uma vez uma casa muito engraçada...";
console.log(str.replace("u", "___")); //Altera apenas o primeiro valor encontrado
console.log(str.replaceAll("a", "---")); //Altera todos os valores encontrados



/* indexOf, lasIndexOf, includes */

str = "Era uma vez uma casa muito engraçada...";
console.log(str.indexOf("u"));
console.log(str.lastIndexOf("o"));
console.log(str.includes("o")); //retorna true ou falso
console.log(str.indexOf("u") > -1); //Uma forma de fazer o includes com recursos antigos



/* slice, substring */

str = "Era uma vez uma casa muito engraçada...";

console.log(str.slice(2)); //Se nao passar o segundo valor, o padrao é string.length -1
console.log(str.substring(2));

console.log(str.slice(2, 7));
console.log(str.substring(2, 7));

console.log(str.slice(-5, -2)); //slice aceita valores negativos
console.log(str.substring(-5, -2)); //retorna uma string vazia, pois nao aceita numeros negativos

console.log(str.slice(8, 2)); //retorna string vazia
console.log(str.substring(8, 2)); //aceita o primeiro numero maior que o numero, faz o corte do 2 até 8-1



/* toLowerCase, toUpperCase */

str = "ERA UMA VEZ UMA casa muito engraçada...";
console.log(str.toUpperCase());
console.log(str.toLowerCase());



/* valueOf, toString */

const stringObj = new String("Meu objeto string");
console.log(stringObj);
console.log(stringObj.valueOf());
console.log(stringObj.toString());



/* trim, trimEnd, trimStart */

str = `           
       Era uma vez uma casa muito engraçada...       

       `;
console.log(str)
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())



/* padStart, padEnd */

str = "0123456789";
console.log(str.padStart(20, "*"));
console.log(str.padEnd(20));

let tel = "91234-2345"; //9****-**34
let tel2 = "1234-2345"; //1***-**45
function mascararTelefone(numero) {
    let positionHifen = numero.indexOf("-");
    let startNumero = numero.slice(0, positionHifen);
    let endNumero = numero.substring(positionHifen);

    return `${startNumero[0].padEnd(startNumero.length,"*")}-${endNumero.slice(-2).padStart(endNumero.length, "*")}`;
}

console.log(mascararTelefone(tel));
console.log(mascararTelefone(tel2));



/* startsWith, endsWituh */

str = "Amanha é domingo"

console.log(str.startsWith("Amanha"));
console.log(str.startsWith("nha", 3)); //Comeca com 'nha' a partir do index 3

console.log(str.endsWith("domingo"));
console.log(str.endsWith("é", 8)); //Define o tamanho da substring



/* charAt, charCodeAt, length */

str = "abcdefgh"

console.log(str.charAt(2));
console.log(str.charCodeAt(2));
console.log(str.length);