var ciudades = ["Bali", "Roma", "Berlín"];

ciudades.push("Rio"); // Añade un elemento al final de la lista
console.log(ciudades);

ciudades.unshift("Rio"); //Añade un elemento al principio
// También se pueden añadir así -> cidades[4] = "Jerez de la Frontera". Sabiendo la posición siguiente. Si nos pasamos añadiría elementos undefined
console.log(ciudades);

// ciudades.pop(); // Saca y devuelve el último elemento de la lista
var ultimoElemento = ciudades.pop();
console.log(ultimoElemento);

// ciudades.shift(); // Saca y devuelve el primer elemento de la lista
var ultimoElemento = ciudades.shift();
console.log(ultimoElemento);

//Para ver en que posición está el elemento de la lista - La primera posición es 0
var index = ciudades.indexOf("Roma");
console.log(index);

//Si buscamos algo que no está nos devolverá -1

var index = ciudades.indexOf("Malaga");
console.log(index);

//Elimina un elemendo con el indice

var ultimoElemento = ciudades.splice(1, 1); //A partir de la posición 1, elimina 1 elemento
console.log(ciudades);

// Copiar un Array en otra variable
var copia = ciudades.slice();
console.log(copia);

console.log(ciudades == copia); //Devolverá false porque son estructuras complejas, no sabe realmente qué elementos hay en cada array por lo que no los puede comparar. Aunque puedan contener lo mismo, son cajas diferentes.
// Si igualamos las variables me devolvería true -> var copia = ciudades;

// Podemos sustituir una posicion por una variable
let indice = 0;
console.log(ciudades[indice]);

// Para acceder al siguiente elemento
indice++;
console.log(ciudades[indice]);

indice++;
console.log(ciudades[indice]);

// Esto es recorrer cada uno de los elementos del array. En eso consiste un bucle, expresar de alguna forma ese recorrido sin tener que escribir siempre el incremento de la variable indice.