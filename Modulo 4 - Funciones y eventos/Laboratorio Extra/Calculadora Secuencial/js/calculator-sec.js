var getNumber = () => parseInt(document.getElementById("input-number").value);
var resultado = 0;
var toAdd = () => getNumber() + resultado;


// console.log(getNumber());

function sumar() {
    if (resultado != undefined) {
        resultado = resultado + getNumber();
    } else {
        resultado = getNumber();
    }
    console.log(resultado);
}


function result() {
    sumar();
    document.getElementById("result").innerText = resultado;
}

document.getElementById("btn-add").addEventListener("click", sumar);

document.getElementById("btn-resolve").addEventListener("click", result);