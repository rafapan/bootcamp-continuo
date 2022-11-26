const product = {
    count: 2,
    price: 12.55,
    type: "alimentacion"
};

let productoIVA;

switch(product.type) {
    case "libro": productoIVA = product.price * 0.04; break;
    case "alimentacion": productoIVA = product.price * 0.1; break;
    default: productoIVA = product.price * 0.21; break;
};

console.log("El IVA (por unidad) de", product.type + " es", productoIVA + " €");

let precioProductoIVA = product.price + productoIVA;
console.log("El precio de la unidad es:", precioProductoIVA + " €");

let totalProducto;

if (product.count < 0) {
    totalProducto = 0
} else {
    totalProducto = product.count * precioProductoIVA;
}
console.log("El precio total de su compra (iva incluido) es:", totalProducto + " €");
