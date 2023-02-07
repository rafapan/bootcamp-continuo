// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

// PARTE 1: Generar Html Dinámico para respresentar selección de unidades
// - Pintar input number
// - Que el usuario no pueda seleccionar más unidades que las que hay en el stock
// - Pintar nombre del producto seleccionado
// - Pintar precio por unidad

var showProducts = (productList) => {
  var cart = document.getElementById("product-list-container");

  for (const product of productList) {
    var div = document.createElement("li");
    div.setAttribute("class", "cart-item");

    var descriptionProduct = document.createElement("div");
    descriptionProduct.setAttribute("class", "item-product");
    descriptionProduct.innerText = product.description;

    var priceProduct = document.createElement("div");
    priceProduct.setAttribute("class", "item-price");
    priceProduct.innerText = product.price + " €/ud.";

    var input = document.createElement("input");
    input.setAttribute("class", "product-unit");
    input.setAttribute("type", "number");
    input.setAttribute("placeholder", product.units);
    input.setAttribute("min", 0);
    input.setAttribute("max", product.stock);
    input.addEventListener(
      "change",
      (event) => (product.units = event.target.value)
    );

    cart.appendChild(div).appendChild(descriptionProduct);
    cart.appendChild(div).appendChild(priceProduct);
    cart.appendChild(div).appendChild(input);
  }
  
};
showProducts(products);

// PARTE 2: Calcular factura y mostrar desglose final del precio
//  Pintar subtotal

//  Calcular subtotal. Es el precio sin IVA
var subtotal = (productList) => {
  var subtotalCart = 0;
  for (var object of productList) {
    subtotalCart += object.units * object.price;
  }
  return subtotalCart;
};

// Calcular IVA. Es el total del IVa de todos los productos
var IVA = (productList) => {
  var iva = 0;
  for (var object of productList) {
    iva += (object.units * object.price * object.tax) / 100;
  }
  return iva;
};

// Calcular el total. Es el subtotal + el IVA
var total = (productList) => {
  var total = 0;
  total = subtotal(productList) + IVA(productList);
  return total;
};

var calculate = () => {
  document.getElementById("subtotal").innerText = subtotal(products) + " €";
  document.getElementById("taxes").innerText = IVA(products) + "€";
  document.getElementById("total").innerText = total(products).toFixed(2) + "€";
};

document.getElementById("calculate").addEventListener("click", calculate);

// Extra: Intenta hacer que el botón Calcular se habilite o deshabilite en función de si el usuario ha elegido al menos 1 unidad de algún producto o no

// var isproductAdded = (productList) => {
//   var numberobjects = 0;
//   for (object of productList) {
//       numberobjects += object.units;
//   };
//   if (numberobjects > 0) {
//     document.getElementById("calculate").disabled = false;
//   } else {
//     document.getElementById("calculate").disabled = true;
//   };
// }

// document.getElementById("comprobar").addEventListener("click", isproductAdded(products));

var isproductAdded = () => {
  var numberobjects = 0;
  var input = document.getElementById("calculate");
  for (object of products) {
    numberobjects += object.units;
  }
  if (numberobjects > 0) {
    input.disabled = false;
  } else {
    input.disabled = true;
  }
  return input.disabled;
};



let allProductUnits = document.getElementsByClassName('product-unit');
for (let i = 0; i < allProductUnits.length; i++) {
  allProductUnits[i].addEventListener("focus", isproductAdded);
  allProductUnits[i].addEventListener("keyDown", isproductAdded);
  allProductUnits[i].addEventListener("keyUp", isproductAdded);
  allProductUnits[i].addEventListener("keyPress", isproductAdded);
}
