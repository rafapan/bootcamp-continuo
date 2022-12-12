// ARROW FUNCTION

var calcularPesoIdeal = (sexo, altura) => (altura * 100 - 150) * (sexo === "hombre" ? 0.75 : 0.6) + 50;
var calcularExcesoDePeso = (pesoActual, pesoIdeal) => pesoActual - pesoIdeal;
var notificaPesoIdeal = pesoIdeal => "Tu peso ideal corresponde a " + pesoIdeal + " kilos";
var notificaEstadoSobrepeso = excesoPeso => {
    if (excesoPeso >= 1) {
        return "Cuidado con los excesos! Debes adelgazar " + excesoPeso + " kilos";
    } else if (excesoPeso <= -1) {
        return "Come un poco más! debes recuperar" + (excesoPeso * -1) + "kilos";
    } else {
        return "Estas ideal de la muerte!";
    } 
}

var informePesoIdeal = person => {
    var pesoIdeal = calcularPesoIdeal(person.sexo, person.altura);
    console.log(notificaPesoIdeal(pesoIdeal));
    console.log(notificaEstadoSobrepeso(calcularExcesoDePeso(person.peso, pesoIdeal)));
}

// Datos de entrada, de server o user input
var person = {
    altura: 1.80,
    peso: 78,
    sexo: "hombre",
}

informePesoIdeal(person);