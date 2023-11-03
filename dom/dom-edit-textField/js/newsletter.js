const txtEmail = document.getElementById("txtEmail");

function editarEmail() {
    txtEmail.disabled = false; //vscode nao autocompleta as property de atributos do html, apenas as propriedades do html
    txtEmail.focus();   //propriedade = id, class, name, title... || atributos = controls, required, disabled...
}

function disableEmail() {
    txtEmail.disabled = true;
}