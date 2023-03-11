// ALGORITMOS DE BÚSQUEDA

// 1. BÚSQUEDA SECUENCIAL O LINEAL
//  Búsqueda valores dentro de un array

var array = [1, 3, 4, 5, 2, 9, 6, 7, 8];

// Iterar con un bucle por todos los elementos del array hasta dar con el resultado dado, una vez encontrado se devuelve la posición del elemento dentro del array. Si no lo encuentra que nos devuelva -1
var search = (array, target) => {
    for (var i = 0; i < array.length; i++) {
        if(array[i] === target) return i;
    }
    return -1;
}

// quiero buscar el elemento 2 dentro de array
console.log(search(array, 2));

// Hay una forma, un método de javascript que te hace esto por debajo
console.log(array.indexOf(2));
console.log(array.indexOf(15));

// ¿Qué pasa si hay dos elementos iguales. Se queda en el primer elemento que encuentra
// Los string se comportan también como un array de caracteres

var myString = "casa";
console.log(myString.indexOf("a"));



console.log("====");
//2. BÚSQUEDA BINARIA 
// Es un algoritmo mejorado siempre y cuando el array esté ordenado. Cuando tenemos un array ordenado por ejemplo en sentido creciente y queremos buscar un número alto estará por el final y si es bajo estará al principio.
// el Algoritmo funciona así. Vamos a localizar el punto medio del array y nos pregunta si lo que buscamos está por arriba o por abajo. Luego coge ese segmento y vuelve a hacer los mismo, busca el punto medio y pregunta si está por encima o por debajo, así hasta que quedan dos opciones.


// Por tanto, en pseudocódigo, nuestro algoritmo quedaría como:
// 1. Buscar los índices máximos y mínimos del array como min = 0 y max = length - 1 .
// 2. Computar el punto medio como la media entre min y max redondeada hacia abajo (debe ser un índice entero).
// 3. Si array[punto medio] === target , paramos el algoritmo, lo hemos encontrado.
// 4. Si array[punto medio] < target , movemos el mínimo min = punto medio + 1 .
// 5. En otro caso, movemos el máximo a max = punto medio - 1 .
// 6. Volvemos al paso 2 .
// Y finalmente, su implementación:

var binarySearch = (array, target) => {
    var min = 0;
    var max = array.length - 1;

    while (min <= max) {
        var mid = Math.floor((max - min) / 2) + min; // + min, para el caso en el que el mínimo no sea 0. Le sumamos y el min se posiciona a partir de ese min
        if (array[mid] === target) return mid;
        else if (array[mid] < target) min = mid + 1;
        else max = mid - 1;
    }
    return -1;
}

var sorteoArray = [12, 14, 23, 25, 30, 36, 43, 62, 67, 72, 88];
console.log(binarySearch(sorteoArray, 12))
