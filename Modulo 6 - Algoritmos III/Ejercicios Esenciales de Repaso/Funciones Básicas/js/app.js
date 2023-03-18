console.log(
    "%cEjercicios Esenciales de Repaso",
    "color: blue; font-weight: bold; text-transform: uppercase"
  );
console.log("----");
console.log(
  "%c1. º Implementa una función que muestre por consola “Hola Mundo”.",
  "color: red; font-weight: bold"
);

let showMessage = () => console.log("Hola mundo");

showMessage();

console.log("----");
console.log(
  "%c2. º Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.",
  "color: red; font-weight: bold"
);

let showGreeting = (name) => console.log("Hola, " + name);

var nombre = "Manolo";
showGreeting(nombre);

console.log("----");
console.log(
  "%c3. º Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.",
  "color: red; font-weight: bold"
);

let toUppercase = (myString) => myString.toUpperCase();

var word = "Hola caracola";
console.log(toUppercase(word));

console.log("----");
console.log(
  "%c4. º Implementa una función que dado un string como parámetro devuelva el string en minúsculas.",
  "color: red; font-weight: bold"
);

let toLowercase = (string) => string.toLowerCase();

var secondword = "HOLA CARACOLA";
console.log(toLowercase(secondword));

console.log("----");
console.log(
  "%c5. º Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.",
  "color: red; font-weight: bold"
);

let num1 = 4;
let num2 = 8;

let add = (a, b) => a + b;
console.log(add(num1, num2));

console.log("----");
console.log(
  "%c6. º Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.",
  "color: red; font-weight: bold"
);

let argument1 = "Hola";
let argument2 = "Caracola";
let argument3 = ";P";

let concatenate = (a, b, c) => console.log(a + " " + b + " " + c);
concatenate(argument1, argument2, argument3);

console.log("----");
console.log(
  "%c7. º Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’ inicializada a null.",
  "color: red; font-weight: bold"
);

let myObject = {
    nombre: "Rafa",
    apellido: "Pan"
};

let addProperty = (object) => {
    object.id = null;
    console.log(object);
}

addProperty(myObject);

