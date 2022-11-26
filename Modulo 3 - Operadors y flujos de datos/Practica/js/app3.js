const booking1 = {count: 8, price: 127.95};
const booking2 = {count: 5, price: 112.95};


// Comparar si dos reservas son iguales
if (booking1.count == booking2.count && booking1.price == booking2.price) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

// Mostrar la suma del número de noches de las dos reservas
console.log("La suma de noches de las dos reservas es: ", booking1.count + booking2.count);

// Comparar dos reservas para mostrar la de mayor número de noches
if (booking1.count > booking2.count) {
    console.log("La reserva de mas noches es: ", booking1);
} else {
    console.log("La reserva de mas noches es: ", booking2);
}

const reservaMayorNoches = booking1.count > booking2.count ? booking1 : booking2;
console.log("La reserva de mas noches es:", reservaMayorNoches);

// Ampliar una noche más una reserva
booking1.count++;
console.log(booking1.count);

// Calcular la diferencia de precio total entre dos reservas (incluidos descuentos)
// Comparar dos reservas para mostrar la de mayor precio final (incluidos descuentos)

let total1 = booking1.count * booking1.price;
let total2 = booking2.count * booking2.price;

const discount1 = total1 > 500 ? total1 * 0.2 : 0;
const discount2 = total2 > 500 ? total2 * 0.2 : 0;

total1 = total1 - discount1;
total2 = total2 - discount2;

console.log("Reserva 1:", total1 + " €", "Reserva 2:", total2 + " €");

if (total1 > total2) {
    console.log("Reserva 1 es la de mayor valor");
    console.log(total1 - total2)
} else {
    console.log("Reserva 2 es la de mayor valor");
    console.log(total2 - total1)
}

// Mostrar el número de reservas a las que se le podrían aplicar descuento

let reservasConDescuento = 0;

if (booking1.count * booking1.price > 500) reservasConDescuento++;
if (booking2.count * booking2.price > 500) reservasConDescuento++;

console.log("Reservas con descuento: ", reservasConDescuento);

// Mostrar "Todas con descuento" si las dos reservas tienen descuentos.

if (booking1.count * booking1.price > 500 && booking2.count * booking2.price > 500) {
    console.log("Todas las reservas tienen descuento:", booking1, booking2)
} else {
    console.log("No todas las reservas tienen descuento.")
}

// Mostrar la suma del precio total con descuentos de las dos reservas
console.log(total1 + total2 + " €");