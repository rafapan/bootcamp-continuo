var randomPick = (n, min, max) => {
  var range = max - min + 1;
  var myArray = [];
  var getRandomGeneral = () => Math.floor(Math.random() * range) + min;

 // Ve añadiendo números aleatorios que no estén ya en el array hasta que la longitud del array sea N
  while (myArray.length < n) {
    temp = getRandomGeneral();
    if (myArray.indexOf(temp) === -1) { // si el indexOF me devuelve un -1 es que no ha encontrado ese elemento y entonces lo añado al array.
        myArray.push(temp);
    }
  }

  
  
  return myArray;
};

console.log(randomPick(10, 1, 100));
console.log(randomPick(6, 1, 49)); // Apuesta automática de la primitiva
console.log(randomPick(15, 1, 15)); // Escoge combinación de bolas de billar
console.log(randomPick(1, 1, 6)); // Tirada aleatoria de un dado