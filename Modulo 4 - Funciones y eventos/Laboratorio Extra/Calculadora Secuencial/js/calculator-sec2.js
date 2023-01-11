var operando = 0;
var getNumber = () => parseInt(document.getElementById("input-number").value);
var operacion = "";
var resultadoFinal = () =>
  parseInt((document.getElementById("result").innerText = resultado));
var resultado;
console.log(resultado);

function resetCount() {
  resultado = undefined;
  operacion = "";
}

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
}

function sumar() {
  operando = parseInt(document.getElementById("input-number").value);

  getResultadoParcial(operacion);

  operacion = "+";

  console.log("El resultado parcial es:", resultado);
  console.log("El número introducido es:", operando);
}

function restar() {
  operando = parseInt(document.getElementById("input-number").value);

  getResultadoParcial(operacion);

  operacion = "-";

  console.log("El resultado parcial es:", resultado);
  console.log("El número introducido es:", operando);
}

function multiply() {
  operando = parseInt(document.getElementById("input-number").value);

  getResultadoParcial(operacion);

  operacion = "*";

  console.log("El resultado parcial es:", resultado);
  console.log("El número introducido es:", operando);
}

function divide() {
  operando = parseInt(document.getElementById("input-number").value);

  getResultadoParcial(operacion);

  operacion = "/";

  console.log("El resultado parcial es:", resultado);
  console.log("El número introducido es:", operando);
}

function result() {
  operando = getNumber();
  getResultadoParcial(operacion);
  resultadoFinal();
  console.log(resultado);
  resetCount();
  console.log(resultado);
}

document.getElementById("btn-add").addEventListener("click", sumar);
document.getElementById("btn-restar").addEventListener("click", restar);
document.getElementById("btn-multiply").addEventListener("click", multiply);
document.getElementById("btn-divide").addEventListener("click", divide);

document.getElementById("btn-resolve").addEventListener("click", result);
