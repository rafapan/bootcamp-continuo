// Requisitos
// Calcular precio total aplicando descuento, según la siguiente regla:
// - Si la cantidad supera 5 unidades, se aplicará un 5% de DocumentTimeline. al total de dicho producto.DocumentTimeline
// - si el coste total de un producto supera 50 €, se aplicará un descuento adiciaonal de 5%.

var productList = [
  {
    product: "Jamón Ibérico",
    units: 1,
    price: 9.99,
  },
  {
    product: "Queso Tostado",
    units: 6,
    price: 4.45,
  },
  {
    product: "Vino Tinto",
    units: 12,
    price: 8.15,
  },
];

//  A partir de una lista de productos, recorrerla y calcular coste de cada producto.
// Para calcular coste de cada producto:
// - Necesitamos saber el coste total = units * price
//  - Aplicar descuento sobre coste total.
//      · Para conocer descuento:
//          · Necesitamos => units y coste total del producto.
//              · Si units > 5 => 5%
//              · Si coste total del producto >= 50 => 5%

//  vamos a empezas las piezas pequedeñas de abajo arriba.

// Con esta función averiguamos si tiene descuento
var getDiscount = (units, cost) => {
    var unitDiscount = units > 5 ? 5 : 0; // Ternario
    var costDiscount = cost >= 50 ? 5 : 0;
    return unitDiscount +  costDiscount;
}

var productCost = product => {
    var productCost = product.units * product.price;
    var productDiscount = getDiscount(product.units, productCost);
    return productCost * (1 - productDiscount / 100);
}

var totalCost = productList => {
    var totalCost = 0;
    for (var product of productList) {
        totalCost = totalCost + productCost(product);
    };
    return totalCost;
}

console.log(totalCost(productList));