//  3. ALGORITMOS DE ORDENACIÓN

var myArray = [3, 5, 1, 8, 7, 2];
console.log("Bubble Sort u Ordenación por burbuja");

// Bubble Sort u Ordenación por burbuja

//  tomamos grupos de elementos de dos en dos y preguntando cual de ellos es mayor. Si el primero es mayor los cambia de orden. Las iteraciones con el ejemplo serían así:

// 1. var array = [3, 5, 1, 8, 7, 2];
// 2. var array = [3, 1, 5, 8, 7, 2];
// 3. var array = [3, 1, 5, 8, 7, 2];
// 4. var array = [3, 1, 5, 7, 8, 2];

// Primera función será agrupar dos elementos
var swap = (array, a, b) => {
  // a es el indice del primer elemento del array y b del segundo
  //Ahora vamos a intercambiar las posiciones
  var temp = array[a];
  // Primero necesito almacenar en una variable temporal el valor que vamos a sustituir
  array[a] = array[b];
  array[b] = temp;
};

var bubbleSort = (array) => {
  var size = array.length;
  // como voy a necesitar la longitud del array varias veces lo voy a meter en una variable para no tener que escribirlo siemppre
  for (var index = 1; index < size; index++) {
    // console.log("Iteración: ", index);
    for (var left = 0; left < size - index; left++) {
      var right = left + 1;
      if (array[left] > array[right]) swap(array, left, right);
      // Así hace una pasada y va empujando el elemento mayor hasta el final, cuando ya en la última pasada el número de la izquierda es menor que el último, sale de este bucle y empieza de nuevo. Así va colocando los mayores de uno a uno hacía la derecha.
      // console.log("Array: ", array);
    }
  }
  return array;
};

console.log(bubbleSort(myArray));
console.log("=====");

// Selection Sort u ordenación por selección.
var myArray2 = [3, 5, 1, 8, 7, 2];

var selectionSort = (array) => {
  var minIndex;
  var size = array.length; // Calculamos su tamaño;
  for (var s = 0; s < size; s++) {
    // s => selection
    // Bucle externo.
    minIndex = s;
    for (var i = s + 1; i < size; i++) {
      // Bucle interno.
      if (array[i] < array[minIndex]) minIndex = i;
    }
    swap(array, minIndex, s);
    console.log(array);
  }
  return array;
};

console.log(selectionSort(myArray2));
console.log("=====");



// Insertion Sort u ordenación por inserción
var myArray3 = [3, 5, 1, 8, 7, 2];

var insertionSort = array => {
  var size = array.length;
  var sortedListLastIndex = 0;

  for (var item = 1; item < size; item++) {
    var current = array[item]; //El valor que hay en esa posición la almacenamos en una variable
    var currentIndex = item;
    var swapIndex = sortedListLastIndex;

    while(current < array[swapIndex] && swapIndex >= 0) {
      swap(array, currentIndex--, swapIndex--);
    }

    sortedListLastIndex++;
  }
  return array;
}

console.log(insertionSort(myArray3));