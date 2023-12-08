function fn(str, value) {
    console.log(this.name);
    console.log(str + " value: " + value);
}

const obj = { 
    name: "Eduardo",
    fn
}

obj.fn("Minha funcao chamada dentro do obj,", 16);


fn.call({name: "José"}, "Minha funcao chamada pelo metodo call,", 20);

fn.apply({name: "Maria"}, ["Minha funcao chamada pelo apply", 25]);

//Depois que foi introduzido o spread operator, o apply virou opcional
fn.call({name: "Nicole"}, ...["Minha funcao chamada pelo call, mas os argumentos passados por array", 43]);



//Com o bind, posso definir quem será o this, e depois apenas passar os argumentos
const fnBind = fn.bind({name: "Marcia"});

//Passo apenas os argumentos str e value, sem se preocupar com o this
fnBind("Minha funcao chamada pelo metodo bind", 45);


