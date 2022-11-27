// 1º Dado el siguiente objeto. Escribir en una variable un día de la semana y decir cual asignatura toca ese día

let horario = {
    lunes: {
    day: "Lunes",
    subject: "Matemáticas",
    },
    martes: {
    day: "Martes",
    subject: "Lengua",
    },
    miercoles: {
    day: "Miércoles",
    subject: "Física",
    },
    jueves: {
    day: "Jueves",
    subject: "Química",
    },
    viernes: {
    day: "Viernes",
    subject: "Gimnasia",
    },
}

let diadelasemana = horario.viernes;

switch(diadelasemana) {
    case horario.lunes: console.log(horario.lunes.subject);break;
    case horario.martes: console.log(horario.martes.subject);break;
    case horario.miercoles: console.log(horario.miercoles.subject);break;
    case horario.jueves: console.log(horario.jueves.subject);break;
    case horario.viernes: console.log(horario.viernes.subject);break;
    
}

// 2º º Según una variable llamada hora , mostrar un buenos días, buenas tardes o buenas noches según la hora.Se utilizarán los tramos de 6 a 12, de 13 a 20 y de 21 a 5. Solo se tienen en cuenta la hora no los minutos.

let hora = 22;

if (hora >= 6 && hora <= 12) {
  console.log("Buenos días");
} else if (hora >= 13 && hora <= 20) {
  console.log("Buenas tardes");
} else if (hora >= 21 || hora <= 5) {
  console.log("Buenas noches");
}

// 3º Dada una variable que se llame diaSemana , que contenga un número del 1 al 7 mostrar el día de la semana correspondiente

let diaSemana = 3;

switch (diaSemana) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
}

// 4º Calcula la media de tres notas y muestra si está apta, no apta, notable o sobre saliente. - Una persona está apta con un 5. - Una persona no apta de menos de un 5. - Notable de 5 a 7. - Sobre saliente de 7 al 10.

let lengua = 8;
let matematicas = 9;
let ciencias = 9;

let media = (lengua + matematicas + ciencias) / 3;

if (media == 5) {
  console.log("Media:", media + "(Apta)");
} else if (media < 5) {
  console.log("Media:", media + "(No apta)");
} else if (media >= 5 && media < 7) {
  console.log("Media:", media + "(Notable)");
} else if (media >= 7) {
  console.log("Media:", media + "(Sobresaliente)");
}

// 5º  Según una variable dia y otra mesNacimiento , calcular el horóscopo de la persona.

let dia = 22;
let mesNacimiento = "agosto";

if (
  (dia >= 21 && mesNacimiento == "marzo") ||
  (dia <= 19 && mesNacimiento == "abril")
) {
  console.log("Aries");
} else if (
  (dia >= 20 && mesNacimiento == "abril") ||
  (dia <= 20 && mesNacimiento == "mayo")
) {
  console.log("Tauro");
} else if (
  (dia >= 21 && mesNacimiento == "mayo") ||
  (dia <= 20 && mesNacimiento == "junio")
) {
  console.log("Géminis");
} else if (
  (dia >= 21 && mesNacimiento == "junio") ||
  (dia <= 22 && mesNacimiento == "julio")
) {
  console.log("Cáncer");
} else if (
  (dia >= 23 && mesNacimiento == "julio") ||
  (dia <= 22 && mesNacimiento == "agosto")
) {
  console.log("Leo");
} else if (
  (dia >= 23 && mesNacimiento == "agosto") ||
  (dia <= 22 && mesNacimiento == "septiembre")
) {
  console.log("Virgo");
} else if (
  (dia >= 23 && mesNacimiento == "septiembre") ||
  (dia <= 22 && mesNacimiento == "octubre")
) {
  console.log("Libra");
} else if (
  (dia >= 23 && mesNacimiento == "octubre") ||
  (dia <= 21 && mesNacimiento == "noviembre")
) {
  console.log("Escoprio");
} else if (
  (dia >= 22 && mesNacimiento == "noviembre") ||
  (dia <= 21 && mesNacimiento == "diciembre")
) {
  console.log("Sagitario");
} else if (
  (dia >= 22 && mesNacimiento == "diciembre") ||
  (dia <= 20 && mesNacimiento == "enero")
) {
  console.log("Capricornio");
} else if (
  (dia >= 21 && mesNacimiento == "enero") ||
  (dia <= 19 && mesNacimiento == "febrero")
) {
  console.log("Acuario");
} else if (
  (dia >= 20 && mesNacimiento == "febrero") ||
  (dia <= 20 && mesNacimiento == "marzo")
) {
  console.log("Piscis");
}

// 6º  Según una variable llamada numero , calcule si es par o inmpar.

let parimpar= 250;

if (parimpar % 2 > 0) {
    console.log("impar")
} else {
    console.log("Par")
}


// 7º Usa una variable y di si es positivo o negativo.

let number = -2;

if (number >= 0) {
  console.log("positivo");
} else {
  console.log("Negativo");
}

// 8º Di si un número es mayor de 100.

let number100 = 222;

if (number100 >= 201) {
  console.log("Sí. Es mayor que 200");
} else {
  console.log("No. Es menor que 200");
}

// 9º Usa 3 variables que contengan un número y di si el tercero es igual a la suma del primero y el segundo.

let a = 2;
let b = 4;
let c = 4;

if (c == a + b) {
  console.log("C es igual a A+B");
} else {
  console.log("C no es igual a A+B");
}

// 10º Según los siguientes objetos. Calcular su área según el tipo de figura geométrica.
// Área del cuadrado: lado * lado.
// Área del círculo: pi * radio al cuadrado
// Pi toma el valor 3.14

var square = {
  sideOne: 2,
  sideTwo: 3,
  typeOfGemotricFigure: "Cuadrado",
};

var circle = {
  radius: 5,
  typeOfGemotricFigure: "Círculo",
};

console.log("Área de cuadrado=", square.sideOne * square.sideTwo + " m2");
console.log("Área de círculo=", circle.radius * circle.radius * 3.14 + " m2");