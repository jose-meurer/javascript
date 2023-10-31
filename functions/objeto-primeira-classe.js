//callback

function fn(cb) {
  console.log("executar acao de callback");
  console.log(typeof cb);
  (typeof cb === "function") && cb(); //curto-circuito
}

function callback() {
  console.log("funcao passada por parametro");
}

fn(callback);

const obj = {
  callback: callback,
};
obj.callback;

function fn2(x1) {
  return function (x2) {
    return x1 * x2;
  };
}

const funcao2 = fn2(10); //fn2(x1) = 10
const mult = funcao2(2); //function (x2) = 2 e retorna o resultado de return x1 * x2;
console.log(mult);

//outro exemplo

function fn3() {
    fn3.count++; 
    fn3.idade = 16; //Semelhante ao ter {idade: 16}
    console.log(fn3);

    return function _fn3() {
        console.log("funcao retornada por parametro");
    }
}
fn3.count = 0;

fn3();
fn3();
fn3();
console.log(`Essa funcao foi chamada ${fn3.count} vezes`, typeof fn3.count);

const funcao3 = fn3();
console.log(funcao3.name) //retorna _fn3, pois é esse é o nome da funcao que foi armazenada dentro da const
funcao3();

//teste
function fn4() {
    return 4 * 4;
}

const funcao4 = fn4();
console.log(funcao4); //como retornou apenas o resultado de uma multiplicacao, nao precisa dos ()