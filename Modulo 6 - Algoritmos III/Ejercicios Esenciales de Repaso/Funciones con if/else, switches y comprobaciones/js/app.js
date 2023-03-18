console.log(
  "%cEjercicios Esenciales de Repaso",
  "color: blue; font-weight: bold; text-transform: uppercase"
);
console.log("----");
console.log(
  "%c1º Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null .",
  "color: red; font-weight: bold"
);

let prueba;

var isNullOrUndefined = (variable) =>
  variable === undefined || variable === null;

console.log(isNullOrUndefined(prueba));

console.log("----");
console.log(
  "%c2º Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.",
  "color: red; font-weight: bold"
);

let number = -4;

var isPositiveOrNegative = (num) =>
  num >= 0
    ? console.log("Este número es positivo")
    : console.log("Este número es negativo");

isPositiveOrNegative(number);

console.log("----");
console.log(
  "%c3º Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que 100 o exactamente 100.",
  "color: red; font-weight: bold"
);

let number2 = 100;

var about100 = (num) => {
  if (num > 100) {
    console.log("Es mayor que 100");
  } else if (num < 100) {
    console.log("Es menor que 100");
  } else {
    console.log("Es igual que 100");
  }
};
about100(number2);

console.log("----");
console.log(
  "%c4º Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’ o no",
  "color: red; font-weight: bold"
);

let person = {
  name: "Rafa",
  apellido: "Pan",
};

var isName = (object) => (object.name ? true : false);
console.log(isName(person));

console.log("----");
console.log(
  "%c5º Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.",
  "color: red; font-weight: bold"
);

let num1 = 4;
let num2 = 3;

let isDivisible = (a, b) => (a % b == 0 ? true : false);
console.log(isDivisible(num1, num2));

console.log("----");
console.log(
  "%c6º Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de caracteres.",
  "color: red; font-weight: bold"
);

let word1 = "Rafa";
let number1 = 3;

let isNumberCharacters = (word, num) => word.length == num;
console.log(isNumberCharacters(word1, number1));

console.log("----");
console.log(
  "%c7º Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la semana es (en texto).",
  "color: red; font-weight: bold"
);

let dia = 2;

let isWeek = (day) => {
  if (day == 1) {
    console.log("Hoy es lunes.");
  } else if (day == 2) {
    console.log("Hoy es martes.");
  } else if (day == 3) {
    console.log("Hoy es miércoles.");
  } else if (day == 4) {
    console.log("Hoy es jueves.");
  } else if (day == 5) {
    console.log("Hoy es viernes.");
  } else if (day == 6) {
    console.log("Hoy es sábado.");
  } else if (day == 0) {
    console.log("Hoy es domingo.");
  }
};
isWeek(dia);

console.log("----");
console.log(
  "%c8º Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.",
  "color: red; font-weight: bold"
);

let month = 4;

let isMonth = (mes) => {
  if (mes == 1) {
    console.log("Enero.");
  } else if (mes == 2) {
    console.log("Febrero.");
  } else if (mes == 3) {
    console.log("Marzo.");
  } else if (mes == 4) {
    console.log("Abril.");
  } else if (mes == 5) {
    console.log("Mayo.");
  } else if (mes == 6) {
    console.log("Junio.");
  } else if (mes == 7) {
    console.log("Julio.");
  } else if (mes == 7) {
    console.log("Agosto.");
  } else if (mes == 7) {
    console.log("Septiembre.");
  } else if (mes == 7) {
    console.log("Octubre.");
  } else if (mes == 7) {
    console.log("Noviembre.");
  } else if (mes == 7) {
    console.log("Diciembre.");
  }
};

isMonth(month);

console.log("----");
console.log(
  "%c9º Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.",
  "color: red; font-weight: bold"
);

let array1 = [0, 2, 3, 4];
let array2 = [1, 2, 3, 4, 5];

let longer = (a, b) => a.length > b.length ? console.log(a) : console.log(b);
longer(array1, array2);


console.log("----");
console.log(
  "%c10º Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no.",
  "color: red; font-weight: bold"
);

let isTheSame = (a, b) => a[0] == b[0];
console.log(isTheSame(array1, array2));