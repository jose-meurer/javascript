/*  
    replace(),      replaceAll(),
    indexOf(),      lasIndexOf(),   includes(),
    slice(),        substring(),    split(),
    toLowerCase(),  toUpperCase(),
    valueOf(),
    trim(),         trimEnd(),      trimStart(),
    padStart(),     padEnd(),
    startsWith(),   endsWituh(),
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
