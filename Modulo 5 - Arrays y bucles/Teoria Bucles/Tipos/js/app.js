var reserva1 = { id: 1, price: 24.50, client: "Caroline" };
var reserva2 = { id: 2, price: 61.50, client: "Liam" };
var reserva3 = { id: 3, price: 49.85, client: "Andrew" };
var reserva4 = { id: 4, price: 37.10, client: "John" };

// Todos estos datos vamos a meterlos en un Array

const reservas = [reserva1, reserva2, reserva3, reserva4];
console.log(reservas);
let total = 0;


// Vamos a calcular la suma total de todas las reservas
// Creamos un bucle
// FOR
for (i = 0; i < reservas.length; i++) {
    total = total + reservas[i].price; // Esto es igual a total += reservas[i].price
}
console.log(total);


// FOR OF
// Si queremos recorrer la lista desde 0 y ahorrarnos el escribir el i = 0; i < reservas.length; i++. Solo cuando queremos recorrer desde el principio hasta el final un array

for (reserva of reservas) {
    total += reserva.price;
};
// En este caso la reserva es una variable que hemos declarado. Como diciendo: "Por cada reserva de nuestro array reservas"
console.log(total);


//FOR IN
// Accede a los atributos del objeto

var ejemploForIn = {id: 5, price: 10.30, client: "Rafa"};

for (propiedad in ejemploForIn) {
    // console.log(propiedad);
    console.log(propiedad + ": " + ejemploForIn[propiedad]); //Hemos accedido al nombre de la propiedad y al contenido de la propiedad
}

// For in de un array

var array = ["hola", "adios", "bye"];

for (propiedad in array) {
    console.log(propiedad + ": " + array[propiedad]); // Como no tiene propiedades como el objeto, lo que nos devuleve es la posición de cada elemento. Propiedad = a la posicion del elemento
}



// WHILE
// Mientras que la condicion se cumpla ejecuta. 

var ciudades = ["Bali", "Roma", "Tokio", "Montevideo"]

// Ahora tenemos la inicialización fuera del bucle, tampoco la post-ejecución
var i = 0;
while (i < ciudades.length) {
    console.log("Estamos visitando " + ciudades[i]);
    i++; // es necesario porque si no siempre estaria accediendo a "Bali". Sería un bucle infintito
}

// Pido que encuentre el id 3 y pare. Mientras no lo encuentre, recorre todas los elementos del array ciudades. Mientras i sea menor que la longitud del array o encontrado sea true no sigas recorriendo el array

// var encontrado = false;
// while (i < ciudades.length || !encontrado) {
//     encontrado = reservas[i].id == 3;
//     i++;
// }


// DO WHILE
// La diferencia más importante es que el bloque de código se ejecuta antes de comprobar la condicion. Llegamos primero y luego compruebo si tengo que seguir ejecutando, comprueba la condición despues. El Do While se ejecuta siempre al menos una vez.

var ex1 = { id: 1, price: 24.50, client: "Caroline" };
var ex2 = { id: 2, price: 61.50, client: "Liam" };
var ex3 = { id: 3, price: 49.85, client: "Andrew" };
var ex4 = { id: 4, price: 37.10, client: "John" };
var ex = [ex1, ex2, ex3, ex4];

var totalex = 0;
var a = 0;
// var esCorrecto = false;

do {
    totalex += ex[a].price;
    console.log(totalex);
    a++;
} while (a < ex.length);