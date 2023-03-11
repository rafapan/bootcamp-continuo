console.log(Math.random());

// GENERACIÓN BINARIA

// [0--------------------0.5--------------------1)
// Probabilidad de que el resultado sea menor que 0.5 --> 50%
// Probabilidad de que el resultado sea mayor que 0.5 --> 50%

// var getRandom = (a, b) => {
//     if (Math.random() < 0.5) {
//         return a;
//     } else {
//         return b;
//     }
// };

var getRandom = (a, b) => (Math.random() < 0.5) ? a : b;

// Convertimos todos los resultados que me devuelve Math.random en dos valores
console.log("=====");
console.log(getRandom("rojo", "negro"));
console.log(getRandom("rojo", "negro"));
console.log(getRandom("rojo", "negro"));
console.log(getRandom("rojo", "negro"));
console.log(getRandom("rojo", "negro"));

// Variante utilizando redondeo 
var getRandomRound = (a, b) => (Math.round(Math.random()) < 0.5) ? a : b;
// Se evalua como booleano. Nos devuelve true o false
console.log("=====");
console.log(getRandomRound("niño", "niña"));
console.log(getRandomRound("niño", "niña"));
console.log(getRandomRound("niño", "niña"));
console.log(getRandomRound("niño", "niña"));
console.log(getRandomRound("niño", "niña"));


// MÚLTIPLES OPCIONES
// Caso sencillo
// Elegir entre 0 y 9

// 0   0.1  0.2  0.3  0.4  0.5  0.6  0.7  0.8  0.9   1
// [----|----|----|----|----|----|----|----|----|----)

// var random = Math.random();

// if (random < 0.1) return 0;
// else if (random < 0.2) return 1;

// Pero qué pasa si es un numero entre 1 y un millón. Tenemos que dividir en el rangos
//  Calcular rango => rango = max - min + 1 = 9 - 0 + 1 => 10 números
console.log("=====");

Math.random() * 10;

Math.floor(); //Lo redondea hacia el entero de la izquiera. Lo aproxima al 0 y me devuelve siempre un número entero

 var getRandomNumber = () => Math.floor(Math.random() * 10);
 console.log(getRandomNumber());

//  CASO GENERAL
// Escojamos número aleatorio entero entre 50 y 100

// var range = 100 - 50 + 1 //Habrá 51 números
// Math.floor(Math.random() * range); // En el caso peor me dará 0 y en el mejor caso casi 51. Me da resultados entre 0 y 50, por lo que debo sumarle 50
//Math.floor(Math.random() * range) + 50;
console.log("=====");

var max = 100, min = 50;
var range =  max - min + 1;

var getRandomGeneral = () => Math.floor(Math.random() * range) + min;
console.log(getRandomGeneral());