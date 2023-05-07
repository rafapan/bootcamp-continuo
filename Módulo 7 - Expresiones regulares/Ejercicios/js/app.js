console.log(
  "%cEnunciados ejercicios extra de regex",
  "color: blue; font-weight: bold; text-transform: uppercase"
);
console.log("----");
console.log(
  "%c1. º Sabemos que un número de teléfono en España está formado por, un número de tres o dos cifras, que indican el prefijo de la comunidad autónoma, además consta de 3 pares de números que pueden estar separados po espacios o no. Valida si es válido un número del tipo 952 35 42 77 o 952354277 .",
  "color: red; font-weight: bold"
);

const patterncase1 = /^\d{2,3}(\s?\d{2}){3}$/;

const valuescase1 = ["952 35 42 77", "952354277"];

valuescase1.forEach((value) => {
  console.log("Caso 1 " + value + " -> ", patterncase1.test(value));
});

console.log("----");
console.log(
  "%c2. º También sabemos que los números de teléfono en España pueden empezar por 9 si se trata de números fijos, o con 6 si son números móviles. Utiliza la expresión regular del ejercício anterior para que ahora pueda validar números que empiecen por 9 o 6. Ejemplo 952 35 42 77 , 652 35 42 77 , 952354277 o 652354277 .",
  "color: red; font-weight: bold"
);

const patterncase2 = /^[6|9]\d{1,2}(\s?\d{2}){3}$/;

const valuescase2 = ["952 35 42 77", "952354277", "652 35 42 77", "652354277"];

valuescase2.forEach((value) => {
  console.log("Caso 2 " + value + " -> ", patterncase2.test(value));
});


console.log("----");
console.log(
  "%c3. º Es normal ver números con el siguiente formato +34 952 63 19 80 . El 34 es el código del país (en nuestro caso España). Mejora la expresión regular de nuestro validador de números de teléfono para que pueda aceptar el código del país.",
  "color: red; font-weight: bold"
);

const patterncase3 = /^((\+34)?\s)?[6|9]\d{1,2}(\s?\d{2}){3}$/;

const valuescase3 = ["952 35 42 77", "952354277", "652 35 42 77", "652354277", "+34 952 63 19 80"];

valuescase3.forEach((value) => {
  console.log("Caso 3 " + value + " -> ", patterncase3.test(value));
});

console.log("----");
console.log(
  "%c4. º También es tipico ver números de teléfonos con el siguiente formato (+34) 952 63 19 80 . Mejora la expresión regular anterior para que pueda aceptar los paréntesis del código del país.",
  "color: red; font-weight: bold"
);

const patterncase4 = /^(((\+34)?\s)?|((\(\+34\))?\s)?)[6|9]\d{1,2}(\s?\d{2}){3}$/;

const valuescase4 = ["952 35 42 77", "952354277", "652 35 42 77", "652354277", "+34 952 63 19 80", "(+34) 952 63 19 80"];

valuescase4.forEach((value) => {
  console.log("Caso 4 " + value + " -> ", patterncase4.test(value));
});

console.log("----");
console.log(
  "%c5. º En España el NIE (número de indentificación de extranjero) comienza por las letras X, Y o Z seguido de 7 números y una letra. Dado un NIE del formato X 1234567P , X1234567P o X 1234567 P , indica si es un NIE válido o no.",
  "color: red; font-weight: bold"
);

const patterncase5 = /^[X-Z]\s?\d{7}\s?[a-z]$/i;

const valuescase5 = ['X 1234567P', 'X1234567P', 'X 1234567 P'];

valuescase5.forEach((value) => {
  console.log("Caso 5 " + value + " -> ", patterncase5.test(value));
});

console.log("----");
console.log(
  "%c6. º Otra manera de representar el NIE es separando los 7 dígitos y la letra por un guión. Ejemplo X 1234567-P . Mejora la expresión regular anterior sobre el NIE para que ahora pueda aceptar el guión o no.",
  "color: red; font-weight: bold"
);

const patterncase6 = /^[X-Z]\s?\d{7}(\s|-)?[a-z]$/i;

const valuescase6 = ['X 1234567P', 'X1234567P', 'X 1234567 P', 'X 1234567-P'];

valuescase6.forEach((value) => {
  console.log("Caso 6 " + value + " -> ", patterncase6.test(value));
});

console.log("----");
console.log(
  "%c7. º Un código postal es un número de 4 dígitos, los dos primeros indican la provincia a la que pertenece. Valida si el siguiente código postal 29015 está bien formado para la provincia de Málaga. Sabemos que el CP de Málaga empieza por 29.",
  "color: red; font-weight: bold"
);

const patterncase7 = /^29\d{3}$/;

const valuescase7 = ['29015'];

valuescase7.forEach((value) => {
  console.log("Caso 7 " + value + " -> ", patterncase7.test(value));
});

console.log("----");
console.log(
  "%c8. º Valida ahora que además un CP sea de Málaga y de Madrid. Sabemos que el CP de Madrid empieza por 28. Ejemplo: 28024",
  "color: red; font-weight: bold"
);

const patterncase8 = /^2[8-9]\d{3}$/;

const valuescase8 = ['29015', '28024'];

valuescase8.forEach((value) => {
  console.log("Caso 8 " + value + " -> ", patterncase8.test(value));
});

console.log("----");
console.log(
  "%c9. º Valida ahora que además un CP sea de Málaga, Madrid y Barcelona. Sabemos que el CP de Barcelona empieza por 08. Ejemplo: 08024",
  "color: red; font-weight: bold"
);

const patterncase9 = /^(08|2[8-9])\d{3}$/;

const valuescase9 = ['29015', '28024', '08024'];

valuescase9.forEach((value) => {
  console.log("Caso 9 " + value + " -> ", patterncase9.test(value));
});

console.log("----");
console.log(
  "%c10. º Valida ahora que además un CP sea de Málaga, Madrid y Barcelona. Sabemos que el CP de Barcelona empieza por 08. Ejemplo: 08024",
  "color: red; font-weight: bold"
);

const patterncase10 = /(\d{1,3},\s?){2}\d{1,3}/;

const valuescase10 = ['RGB(128, 128, 0)', 'rgb(128, 128, 0)', 'rgb(128,128,0)'];

valuescase10.forEach((value) => {
  console.log("Caso 10 " + value + " -> ", patterncase10.test(value));
});