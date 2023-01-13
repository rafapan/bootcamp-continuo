var operando = 0;
var operacion = "";
var resultado = 0;
var getNumber = () => parseInt(document.getElementById("input-number").value);
var resultadoFinal = () => parseInt((document.getElementById("result").innerText = resultado));

// Calculos

function sumar() {
  comprobarOperando();
  getResultadoParcial(operacion);
  operacion = "+";
}

function restar() {
  comprobarOperando();
  getResultadoParcial(operacion);
  operacion = "-";
}

function multiply() {
  comprobarOperando();
  getResultadoParcial(operacion);
  operacion = "*";
}

function divide() {
  comprobarOperando();
  getResultadoParcial(operacion);
  operacion = "/";
}

// Según la operacion seleccionada pasamos el parámetro que indicará si debe sumar, restar, multiplicar o dividir.

function getResultadoParcial(operacion) {
  switch (operacion) {
    case "+":
      resultado = resultado + operando;
      break;
    case "-":
      resultado = resultado - operando;
      break;
    case "*":
      resultado = resultado * operando;
      break;
    case "/":
      resultado = resultado / operando;
      break;
    default:
      resultado = operando;
  }
  resetOperacion();
}

// Comprobamos si el usuario al introducir un valor quiere calcular o no a partir del resultado anterior. Si introduce un número antes de la operación consideramos que es una nueva operación e ignora el resultado anterior.

function comprobarOperando() {
  if (isNaN(getNumber())) {
    operando = resultadoFinal(); 
  } else {
    operando = getNumber();
  }
}

// Calcular resultado
function result() {
  operando = getNumber();
  getResultadoParcial(operacion);

  if (isNaN(resultado)) {
    document.getElementById("result").innerText = "Error";
  } else {
    resultadoFinal();
  }
}

function reset () {
  document.getElementById("input-number").value = "";
  document.getElementById("result").innerText = "0";
  resetOperacion();
}

// Limpiamos y hacemos foco en el input-number

function resetOperacion() {
  document.getElementById("input-number").value = "";
  document.getElementById("input-number").focus();
  operacion = "";
}


document.getElementById("btn-add").addEventListener("click", sumar);
document.getElementById("btn-restar").addEventListener("click", restar);
document.getElementById("btn-multiply").addEventListener("click", multiply);
document.getElementById("btn-divide").addEventListener("click", divide);

document.getElementById("btn-resolve").addEventListener("click", result);
document.getElementById("btn-reset").addEventListener("click", reset);
