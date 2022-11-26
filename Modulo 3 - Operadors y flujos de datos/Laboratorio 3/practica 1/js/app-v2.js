const product = {
    count: 8,
    price: 12.55,
    type: "ropa"
};


let totalProducto;

if (product.count < 0) {
    totalProducto = 0
} else {
    totalProducto = product.count * product.price;
}

console.log("La total sin IVA es:", totalProducto  + " €");

let productoIVA;

switch(product.type) {
    case "libro": 
        console.log("El tipo de IVA es 0.04");
        productoIVA = 0.04; break;
    case "alimentacion": 
        console.log("El tipo de IVA es 0.1")
        productoIVA = 0.1; break;
    default: 
        console.log("El tipo de IVA es 0.21");
        productoIVA = 0.21; break;
};

let totalCompra = totalProducto + (totalProducto * productoIVA);
console.log("Precio con IVA:", totalCompra + " €");
