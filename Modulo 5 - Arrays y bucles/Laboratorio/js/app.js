const carrito = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false,
  },
];
console.log("%c1. Listar todos los productos", "color: red; font-weight: bold");

function mostrarObjetosArray() {
  for (objeto of carrito) {
    imprimirProducto(objeto);
  }
}

function imprimirProducto(producto) {
  for (dato in producto) {
    console.log(dato + ": " + producto[dato]);
  }
  console.log("----");
}

mostrarObjetosArray();

console.log(
  "%c2. Eliminar el producto con id 54657 del carrito de la compra",
  "color: red; font-weight: bold"
);

// var a = carrito.splice(1, 1);

// function encontrarPosicion() {
//     let posicionBorrar = "54657";

//     for (i = 0; i < carrito.length; i++) {
//         if (carrito[i].id == posicionBorrar) {
//             return i;
//         }
//     }
// }

let posicionBorrar = "54657";

function encontrarPosicion() {
  for (posicion = 0; posicion < carrito.length; posicion++) {
    if (carrito[posicion].id == posicionBorrar) {
      console.log("La posicion es: " + posicion);
      console.log(" ");
      return posicion;
    }
  }
}

function borrarObjeto() {
  carrito.splice(encontrarPosicion(), 1);
  mostrarObjetosArray();
}

borrarObjeto();

console.log(
  "%c3. Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).",
  "color: red; font-weight: bold"
);
let total = 0;
for (i = 0; i < carrito.length; i++) {
  total += carrito[i].price * carrito[i].count;
}
console.log("EL precio total es: " + total + " €");
console.log("----");

console.log(
  "%c4. Filtrar por los productos que sean prime.",
  "color: red; font-weight: bold"
);

for (primes of carrito) {
  if (primes.premium == true) {
    imprimirProducto(primes);
  }
}

console.log(
  "%c5. Si todos los productos son prime mostrar un mensaje 'Pedido sin gastos de envío', si no 'Este pedido tiene gastos de envío'",
  "color: red; font-weight: bold"
);

function comprobarGastosEnvio() {
  let allPrimes = true;

  for (productos of carrito) {
    allPrimes = allPrimes && productos.premium;
  }

  return allPrimes;
}

console.log("Todos los productos son premium: " + comprobarGastosEnvio());

if (comprobarGastosEnvio() == true) {
  console.log("Pedido sin gastos de envío");
} else {
  console.log("Este pedido tiene gastos de envío");
}

console.log("----");
console.log(
  "%c7. Aplicar un descuento del 5% si la compra es mayor de 100 €.",
  "color: red; font-weight: bold"
);
function aplicarDto() {
  if (total > 100) {
    total = total * 0.95;
    console.log("El precio con un 5% de dto. es: " + total + " €");
  } else {
    console.log("El precio final (sin dto.) es: " + total + " €");
  }
}

aplicarDto();

console.log("----");
console.log(
  "%c6. Mostrar el carrito en un listado de html básico.",
  "color: red; font-weight: bold"
);


function pintarDOM() {
  let cadenaString = "";
  for (producto of carrito) {
    cadenaString = cadenaString + "<ul>";
    for (propiedad in producto) {
      cadenaString =
        cadenaString +
        ("<li>" + propiedad + ": " + producto[propiedad] + "</li>");
    }
    cadenaString = cadenaString + "</ul> ";
  }

  document.getElementById("carritolist").innerHTML = cadenaString;
}

pintarDOM();
