var getNumber = () => parseInt(document.getElementById("input-number").value);
// var toAdd = () => getNumber() + getSecondNumber();
var resultado;


// console.log(getNumber());

function sumar() {
    if (resultado != null) {
        resultado = resultado + getNumber();
    } else {
        resultado = getNumber();
    }
    console.log(resultado);
}

function restar() {
    if (resultado != null) {
        resultado = resultado - getNumber();
    } else {
        resultado = getNumber();
    }
    console.log(resultado);
}

function result() {
    document.getElementById("result").innerText = resultado;
}

document.getElementById("btn-add").addEventListener("click", sumar);
document.getElementById("btn-restar").addEventListener("click", restar);
document.getElementById("btn-resolve").addEventListener("click", result);