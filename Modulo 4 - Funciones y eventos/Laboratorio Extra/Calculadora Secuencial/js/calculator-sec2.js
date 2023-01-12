var operando = 0;
var getNumber = () => parseInt(document.getElementById("input-number").value);
var operacion = "";
var resultadoFinal = () => parseInt((document.getElementById("result").innerText = resultado));

var resultado = 0;
console.log(resultado);
console.log(typeof(resultado));
console.log(getNumber());
console.log(typeof(getNumber()));


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
function resetOperacion() {
  document.getElementById("input-number").value = "";
  document.getElementById("input-number").focus();
  operacion = "";
}

// function sumar() {
//   console.log(resultado);
//   console.log(typeof(resultado));

//   operando = parseInt(document.getElementById("input-number").value);
//   getResultadoParcial(operacion);
//   operacion = "+";
// }

function sumar() {
  console.log(getNumber());
  console.log(typeof(getNumber()));
  if (isNaN(getNumber())) {
    operando = parseInt((document.getElementById("result").innerText));
    console.log(operando);
    getResultadoParcial(operacion);
    operacion = "+";
  } else {
    operando = parseInt(document.getElementById("input-number").value);
    console.log(operando);
    getResultadoParcial(operacion);
    operacion = "+";
  }
}


function restar() {
  operando = parseInt(document.getElementById("input-number").value);
  getResultadoParcial(operacion);
  operacion = "-";
}

function multiply() {
  operando = parseInt(document.getElementById("input-number").value);
  getResultadoParcial(operacion);
  operacion = "*";
}

function divide() {
  operando = parseInt(document.getElementById("input-number").value);
  getResultadoParcial(operacion);
  operacion = "/";
}

function result() {
  operando = getNumber();
  getResultadoParcial(operacion);

  if (isNaN(resultado)) {
    document.getElementById("result").innerText = "Error";
  } else {
    resultadoFinal();
  }

  resetResultado();

  console.log(resultado);
  console.log(typeof(resultado));
}

function reset () {
  document.getElementById("input-number").value = "";
  document.getElementById("result").innerText = "0";
  resetOperacion();
  resetResultado();
  console.log(resultado);
  console.log(operacion);
  console.log(typeof(resultado));
}

function resetResultado () {
  resultado = parseInt(document.getElementById("result").innerText);
}

document.getElementById("btn-add").addEventListener("click", sumar);
document.getElementById("btn-restar").addEventListener("click", restar);
document.getElementById("btn-multiply").addEventListener("click", multiply);
document.getElementById("btn-divide").addEventListener("click", divide);

document.getElementById("btn-resolve").addEventListener("click", result);
document.getElementById("btn-reset").addEventListener("click", reset);
