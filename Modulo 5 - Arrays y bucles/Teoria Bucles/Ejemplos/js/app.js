var ciudades = ["Bali", "Roma", "Berlín", "Málaga", "Madrid"];

// Inicializamos la variable indice que corresponde a las posiciones del array ciudades[indice]. La condición es que ejecute la iteracion mientras indice sea menor que la longitud del array. Y después de ejecutar la iteración que aumente el indice.
for (indice = 0; indice < ciudades.length; indice++) {
    console.log(ciudades[indice]);
}

// Recorrerlo al reves
for (i = ciudades.length - 1; i >= 0; i--) {
    console.log(ciudades[i]);
}

// Esto es igual a:

// let indice = 0;
// console.log(ciudades[indice]);
// indice++;
// console.log(ciudades[indice]);
// indice++;
// console.log(ciudades[indice]);
// indice++;
// console.log(ciudades[indice]);
// indice++;
// console.log(ciudades[indice]);
// indice++;