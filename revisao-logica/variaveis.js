let teste = "minha String";
teste = 16;
console.log(teste);

let teste2 = 10;
teste2 = 17;
// let teste2 = 30; variavel recomendada, nao usar o var, pois tem vazamento de variavel e pode ser declarada mais de uma vez
console.log(teste2);

const teste3 = 10;
// teste3 = 20; const = constante = imutavel = final no java = somente leitura depois de declarada
console.log(teste3);

var teste4 = 50; 
var teste4 = 3;
console.log(teste4);

/* 

var     -   não recomendado, pois “vaza escopo” em estrutura de controle
let     -   use quando realmente houver necessidade de alterar a variável
const   -   prefira valores imutáveis

*/
