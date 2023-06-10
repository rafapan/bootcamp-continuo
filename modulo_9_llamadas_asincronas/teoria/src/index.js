// CALLBACKS

// setTimeout(function() {
//   alert("Hola después de 3 segundo");
// }, 3000);
// // ==============================

// const mycallback = () => {
//   alert("Hola después de 1 segundo")
// };

// setTimeout(mycallback, 3000);

// ==============================

// const mycallback = function() {
//   alert("Hola después de 1 segundo")
// };

// setTimeout(mycallback, 3000);

// ========================================================================================================================

// PROMESAS

// Ejemplo devolviendo éxito - resolve
// Promesa sencilla, le vamos a asignar una nueva promesa (newPromise) y ya sabemos que tendremos que tener un resolve y un reject como parámetros. A resolve lo vamos a llamar con los datos que queremos resolver con la promesa y a reject cuando se produzca un error. Siempre se crean así, con un resolve y un reject.

const myPromise = new Promise((resolve, reject) => {
  resolve("Hola, esta es la respuesta correcta de la promesa"); // resolve con lo que queremos devolver.
});

// .then es que se ha resuelto y ha llamado a resolve- Cuando estén disponibles los datos
myPromise.then((result) => {
  alert(result);
});

// Ejemplo devolviendo fracaso - reject

// ==============================


const myPromise = new Promise((resolve, reject) => {
  reject("Error"); // resolve con lo que queremos devolver.
});

// .then es que se ha resuelto y ha llamado a resolve- Cuando estén disponibles los datos
myPromise
  .then((result) => {
    //dejamos el then para cuando nos lleguen los datos de forma correcta
    alert(result);
  })
  .catch((error) => {
    alert("Se ha producido un error: " + error);
  });
