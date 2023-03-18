console.log(
    "%cEjercicios Esenciales de Repaso",
    "color: blue; font-weight: bold; text-transform: uppercase"
  );
  console.log("----");
  console.log(
    "%c1º Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir, devuelva ‘undefined’ .",
    "color: red; font-weight: bold"
  );
  
  let myArray = [1, 2, 3];

  let secondElement = (array) => {
    console.log(array[1]);
  }
  secondElement(myArray);

  console.log("----");
  console.log(
    "%c2º Implementa una función que admita un string como parámetro y devuelva la última letra.",
    "color: red; font-weight: bold"
  );

  let myString = "Rafael";

  let lastElement = (string) => {
    let a = string.length - 1;
    return string[a];
  }

  console.log(lastElement(myString));

  console.log("----");
  console.log(
    "%c3º Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el resultado.",
    "color: red; font-weight: bold"
  );

  let swap = (array) => {
    let a = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = a;
    console.log(array);
  }
  swap(myArray);