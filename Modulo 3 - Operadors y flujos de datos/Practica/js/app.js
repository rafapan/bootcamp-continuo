const booking = {count: 5, prince: 127.95};

let total = booking.count * booking.prince;

console.log("Total sin descuento: " + total + " €");

let discount = total * 0.2;

// if (total > 500) {
//     total = total - discount;
// }

total = total > 500 ? total - discount : total;


console.log("Total con descuento: " + total + " €");