/**
 *  REST
 */

const myFunction = (...myArguments) => {
  console.log(myArguments);
  console.log(myArguments.length);
};

myFunction("uno", 2, true);

//Podría hacer funciones sin definir un número de argumentos.

// También se puede hacer una función de suma
const sum = (...numbers) => {
  let result = 0;
  for (const n of numbers) {
    result += n;
  }
  return result;
};
console.log(sum()); // 0
console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
