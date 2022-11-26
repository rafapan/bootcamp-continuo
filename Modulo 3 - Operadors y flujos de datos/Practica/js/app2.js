const booking = {count: 8, price: 127.95};

let total = booking.count * booking.price;

const discount = total > 500 ? total * 0.2 : 0;

console.log("Total sin descuento: " + total + " €");

if (total > 500 && discount > 0) {
    console.log("Descuento: ", discount + " €");
    console.log("Total con descuento: ", total - discount + " €");
}