console.log(
  "%cEjercicios Esenciales de Repaso",
  "color: blue; font-weight: bold; text-transform: uppercase"
);
console.log("----");
console.log(
  "%c1º Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas veces como indique el número.",
  "color: red; font-weight: bold"
);

let numero = 3;
let texto = "Hola caracola";

let nTimes = (msg, n) => {
  for (let i = 0; i < n; i++) {
    console.log(msg);
  }
};

nTimes(texto, numero);

console.log("----");
console.log(
  "%c2º Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que tiene el objeto.",
  "color: red; font-weight: bold"
);

let coche = {
  marca: "peugeot",
  color: "rojo",
};

let numberProperties = (object) => {
  let count = 0;
  for (propierty in object) {
    count++;
  }
  return count;
};

console.log("El objeto tiene " + numberProperties(coche) + " propiedades");

console.log("----");
console.log(
  "%c3º Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.",
  "color: red; font-weight: bold"
);

let printValues = (object) => {
  for (propierty in object) {
    console.log(propierty + ": " + object[propierty]);
  }
};
printValues(coche);

console.log("----");
console.log(
  "%c4º Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento del array multiplicado por dicho número. Devuelve el resultado.",
  "color: red; font-weight: bold"
);

let myArray = [1, 2, 3, 4];
let n = 3;

let multiply = (array, multiplier) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum * multiplier;
};

console.log(multiply(myArray, n));

console.log("----");
console.log(
  "%c5º Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.",
  "color: red; font-weight: bold"
);

let myString = "rafael";
let letter = "a";

let getNumberOneCaracter = (string, caracter) => {
  let times = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === caracter) {
      times++;
    }
  }
  return times;
};

console.log(getNumberOneCaracter(myString, letter));

console.log("----");
console.log(
  "%c6º Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada elemento por consola.",
  "color: red; font-weight: bold"
);

let getElements = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

getElements(myString);

console.log("----");
console.log(
  "%c6º Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo muestre por consola.",
  "color: red; font-weight: bold"
);

let getElementsReverse = (array) => {
  for (let i = array.length - 1; i > -1; i--) {
    console.log(array[i]);
  }
};
getElementsReverse(myString);

console.log("----");
console.log(
  "%c7º Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos son menores a dicho número, y cuántos no.",
  "color: red; font-weight: bold"
);

let getNumberMajorMinor = (array, a) => {
  let major = 0;
  let minor = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > a) {
      major++;
    } else if (array[i] < a) {
      minor++;
    }
  }
  console.log("Hay " + major + " elementos MAYORES");
  console.log("Hay " + minor + " elementos MENORES");
};

getNumberMajorMinor(myArray, n);

console.log("----");
console.log(
  "%c8º Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el segundo.",
  "color: red; font-weight: bold"
);

let myArray1 = "rafael";
let myArray2 = "amparo";

let getTheSame = (array1, array2) => {
  let n = 0;
  for (elemento in array1) {
    for (elemento2 in array2) {
      if (array1[elemento] === array2[elemento2]) {
        n++;
      }
    }
  }
  if (n > 0) {
    console.log("Hay elementos que coinciden");
  } else {
    console.log("No hay elementos que coincidan");
  }
};

getTheSame(myArray1, myArray2);

console.log("----");
console.log(
  "%c9º Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo y viceversa. Muestra los arrays transformados por consola.",
  "color: red; font-weight: bold"
);

let arrayNine1 = [1, 2, 3, 4];
let arrayNine2 = [5, 6, 7, 8];

let swapArray = (array1, array2) => {
    console.log("El primer array es: " + array1);
    console.log("El segundo array es: " + array2);
  for (let i = 0; i < array1.length; i++) {
    let temp = array1[i];
    array1[i] = array2[i];
    console.log("El primer array va obteniendo los elementos del segundo " + array1);
    array2[i] = temp;
    console.log("El segundo array va obteniendo los elementos del primero " + array2);
  }
};

swapArray(arrayNine1, arrayNine2);

console.log("----");
console.log(
  "%c10º Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc",
  "color: red; font-weight: bold"
);

var arrayToObject = arr => {
    var object = {};
    for (var i = 0; i < arr.length; i++) {
        var propierty = "prop" + i;
        object[propierty] = arr[i];
    }
    return object;
}
console.log(arrayToObject(["hola", "adios"]));

console.log("----");
console.log(
  "%c11º Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado. Muestra por consola cada elemento por el que iteres.",
  "color: red; font-weight: bold"
);

let numElements = 2;

var nElements = (array, n) => {
    for (i = 0; i < n; i++) {
        console.log(array[i]);
    }
}

nElements(arrayNine1, numElements);

console.log("----");
console.log(
  "%c12º Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.",
  "color: red; font-weight: bold"
);

let arrayStrings = ["hola", "adios"];
let stringFound = "hola";

let stringInArray = (arr, strin) => {
    for (a in arr) {
        if (arr[a] === strin) return true;
    }
    return false;
}
console.log(stringInArray(arrayStrings, stringFound));

console.log("----");
console.log(
  "%c13º Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y otra función equivalente que haga la traducción inversa.",
  "color: red; font-weight: bold"
);

let spanishFruits = ["manzana", "fresa"];
let englishFruits = ["apple", "strawberry"];

let spanish = "manzana";
let english = "apple";

let traduce = (array1, array2, word) => {
    for (let index = 0; index < array1.length; index++) {
        if (array1[index] === word) console.log(array2[index]); 
    }
}

var traduceToSpanish = (array1, array2, word) => traduce(array1, array2, word);
var traduceToEnglish = (array1, array2, word) => traduce(array1, array2, word);

traduceToEnglish(spanishFruits, englishFruits, spanish);
traduceToSpanish(englishFruits, spanishFruits, english);

console.log("----");
console.log(
  "%c14º Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.",
  "color: red; font-weight: bold"
);

let text = "hola caracola";

let inverse = (msg) => {
    for (let index = 0; index < msg.length; index++) {
        console.log(msg.shift());
        console.log(temp);
    }
}


inverse(text)