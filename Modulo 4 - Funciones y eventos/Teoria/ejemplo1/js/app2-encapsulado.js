// ===============
// Encapsulado
// ===============

// function calcularPesoIdeal(sexo, altura) {
//   var pesoIdeal;
//   if (sexo === "hombre") {
//     pesoIdeal = (altura * 100 - 150) * 0.75 + 50;
//   } else {
//     pesoIdeal = (altura * 100 - 150) * 0.6 + 50;
//   }
//   return pesoIdeal;
// }

// function calcularPesoIdeal(sexo, altura) {
//     var pesoIdeal;
//     if (sexo === "hombre") {
//       return (altura * 100 - 150) * 0.75 + 50;
//     } else {
//       return (altura * 100 - 150) * 0.6 + 50;
//     }
//   }

function calcularPesoIdeal(sexo, altura) {
  var factor = sexo === "hombre" ? 0.75 : 0.6;
  return (altura * 100 - 150) * factor + 50;
}

function calcularExcesoDePeso (pesoActual, pesoIdeal) {
    return pesoActual - pesoIdeal;
}

function notificaPesoIdeal(pesoIdeal) {
    return "Tu peso ideal corresponde a " + pesoIdeal + " kilos";
}

function notificaEstadoSobrepeso(excesoPeso) {
    if (excesoPeso >= 1) {
        return "Cuidado con los excesos! Debes adelgazar " + excesoPeso + " kilos";
    } else if (excesoPeso <= -1) {
        return "Come un poco más! debes recuperar" + (excesoPeso * -1) + "kilos";
    } else {
        return "Estas ideal de la muerte!";
    } 
}

function informePesoIdeal(person) {
    var pesoIdeal = calcularPesoIdeal(person.sexo, person.altura);
    var excesoPeso = calcularExcesoDePeso(person.peso, pesoIdeal);
    console.log(notificaPesoIdeal(pesoIdeal));
    console.log(notificaEstadoSobrepeso(excesoPeso));
}

// Datos de entrada, de server o user input
var person = {
    altura: 1.80,
    peso: 78,
    sexo: "hombre",
}

informePesoIdeal(person);