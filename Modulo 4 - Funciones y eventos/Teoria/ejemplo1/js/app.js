// Datos de entrada
var altura = 1.8;
var peso = 73;
var sexo = "hombre";

// Fórmula peso ideal
//  Altura en cm - 150 * 0.75/0.6 + 50
var pesoIdeal;
if (sexo === "hombre") {
    pesoIdeal = (altura * 100 - 150) * 0.75 + 50;
} else {
    pesoIdeal = (altura * 100 - 150) * 0.6 + 50;
}

console.log("Tu peso ideal correspondde a", pesoIdeal, "kilos");

var excesoPeso = peso - pesoIdeal;

if (excesoPeso >= 1) {
    console.log("Cuidado con los excesos! Debes adelgazar", excesoPeso, "kilos")
} else if (excesoPeso <= -1) {
    console.log("Come un poco más! debes recuperar", excesoPeso * -1, "kilos");
} else {
    console.log("Estas ideal de la muerte!");
}

