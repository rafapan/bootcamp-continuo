const bookings = [
    { id: 1, price: 45.30, count: 3, room: "standard", prepaid: false,
   succeeded: true },
    { id: 2, price: 92.45, count: 4, room: "superior", prepaid: false,
   succeeded: true },
    { id: 3, price: 63.50, count: 7, room: "standard", prepaid: true,
   succeeded: false },
    { id: 3, price: 37.50, count: 2, room: "standard", prepaid: true,
   succeeded: true },
    { id: 5, price: 87.90, count: 5, room: "superior", prepaid: true,
   succeeded: false }
   ];

//    listamos todas las reservas del hotel

//    for (i = 0; i < bookings.length; i++) {
//     imprimir(bookings[i]);
//    }

   for (reserva of bookings) {
    imprimir(reserva);
   }

   function imprimir(reserva) {
    console.log("----");
    for (propiedad in reserva) {
        console.log(propiedad + ": " + reserva[propiedad]);
    }
    //  Esta función podemos hacerla más simple con un bucle

    // console.log("---- Reserva " + reserva.id + " ----");
    // console.log("Price: " + reserva.price);
    // console.log("Noches: " + reserva.count);
    // console.log("Tipo de habitación: " + reserva.room);
    // console.log("Está pagada: " + reserva.prepaid);
    // console.log("Error: " + !reserva.succeeded);
   };

// Indicarnos si al menos una reserva ha fallado

function existeError() {
    let succeeded = true;

    for (reserva of bookings) {
        succeeded = succeeded && reserva.succeeded;
    }

    return !succeeded;
}
console.log("----");
console.log("Existe reserva con error: " + existeError());
console.log("----");

// Listar solo las reservas que tienen éxito
console.log("Las reservas que han tenido éxito son:");
for (reserva of bookings) {
    if (reserva.succeeded) imprimir(reserva);
    // Decir (reserva.succeeded) es como decir true = true -> true y true es reserva.succeeded
}

// Listas las reservas que ya está pagadas
console.log("----");
console.log("Las reservas que ya están pagadas son: ");

for (reserva of bookings) {
    if (reserva.prepaid == true) {
        imprimir(reserva);
    }
}

// Calcular la suma total de los precios
let total = 0;

for (reserva of bookings) {
    total += reserva.price * reserva.count;
}

console.log("El total de las reservas es: " + total);

// Aplicar un dto. de un 10% a todas las reservas.

console.log("----");
console.log("Las reservas con un 10% de descuento");
for (reserva of bookings) {
    reserva.price = reserva.price * 0.9;
}

for (reserva of bookings) {
    imprimir(reserva);
}

// reservas pagadas que han fallado
console.log("----");
console.log("Las reservas pagadas que han fallado son: ");
for (book of bookings) {
    if (book.succeeded == false && book.prepaid == true) imprimir(book);
}

// Bucle anidado. Buscar un identificador repetido
// Lo que vamos a hacer es un bucle para recorrer las reservas.
console.log("----");
let repetido = false;

 for (i = 0; i < bookings.length; i++) {
    const reserva1 = bookings[i];
    // tenemos en la primera iteracion una reserva, la primera posición del array, y necesitamos volver a hacer otra vez el bucle para comprobar si hay alguna reserva igual, con el mismo id.
    for (x = i + 1; x < bookings.length; x++) {
        // cambiamos la variable para no usar la misma que antes e iterar sobre la misma variable.
        // la iniciacion es a partir de i + 1 para que no empiece desde el mismo sitio y compare la misma reserva sobre si misma.
        const reserva2 = bookings[x];
        repetido = repetido || reserva1.id === reserva2.id;
    }
 }

 console.log("Hay identificadores repetidos: " + repetido);

//  function bucarId(id) {
//     let encontrado = false;
//     for (x = 0; x < bookings.length; x++) {
//         encontrado = encontrado || bookings[x].id == id;

//     }
//  }