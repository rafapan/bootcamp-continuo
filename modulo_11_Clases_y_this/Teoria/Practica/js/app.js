// Carrito de la compra

/*
- Cada producto:
- Nombre, ctam compra de cada uno, precio e IVA
*/

// Requisitos

/*
- Queremos calcular:
  - El subtotal de la compra (suma del producto por cantidad sin contar con el IVA)
  - El todal de la compra (subtotal + IVA)
  - Comprar en el extranjero sin iva
*/

const cesta = [
  {
    nombre: "Cerveza",
    cantidad: 1,
    precio: 2,
    tipoIVA: "general",
  },
  {
    nombre: "Galletas",
    cantidad: 3,
    precio: 1,
    tipoIVA: "reducido",
  },
  {
    nombre: "pan",
    cantidad: 4,
    precio: 0.5,
    tipoIVA: "superreducido",
  },
];

class CarritoDeLaCompra {
  constructor() {
    this._cesta = [];
    this._subtotal = 0; //La inicializamos a 0
    this._total = 0;
  }

  calculaSubtotal() {
    //Método define el subtotal de la compra.
    // Repasando. bucles.
    // this._subtotal = 0;
    // for (let i = 0; i < this._cesta.length; i++) {
    //   this._subtotal = this._subtotal + this._cesta[i].precio * this._cesta[i].cantidad
    // }

    // Repasando. Reduce
    // this._subtotal = cesta.reduce((acumulado, lineaTicket)=>acumulado+(lineaTicket.cantidad * lineaTicket.precio), 0)

    // Repasando. Destructuring
    this._subtotal = cesta.reduce(
      (acumulado, { cantidad, precio }) => acumulado + cantidad * precio,
      0
    );
  }

  calculaFactorIVA(tipoIVA) {
    switch (tipoIVA) {
      case "general":
        return 1.21;
      case "reducido":
        return 1.1;
      case "superreducido":
        return 1.4;
    }
  }
  calculaTotal() {
    this._total = cesta.reduce(
      (acumulado, { cantidad, precio, tipoIVA }) =>
        acumulado + cantidad * precio * this.calculaFactorIVA(tipoIVA),
      0
    );
  }

  // Vamos a exponer una propiedad para subtotal, porque la tenemos como una propiedad interna. carrito.subtotal entra por el getter y nos devuelve el valos de _subtotal
  get subtotal() {
    return this._subtotal;
  }
  get total() {
    return this._total;
  }

  set cesta(cestaExterna) {
    //Cada vez que la cesta de nuestra instancia cambie vamos a setearla
    this._cesta = cestaExterna;
    this.calculaSubtotal(); //Cada vez que cambiemos los cambios de la cesta se calcula el subtotal. Cada vez que seteo "cesta" calculamos el subtotal.
    this.calculaTotal();
  }
  // Hemos creado un setter que será accesible desde fuera. Podré usarla como una propiedad, .cesta, asignarle una cesta y llamaré a la propiedad. Cuando reciba unos parámetros entrará `pr eñ set, y seteará la propiedad interna de nuestra clase.
}

class CarritoExtranjero extends CarritoDeLaCompra {
  calculaTotal() {
    this._total = cesta.reduce(
      (acc, { cantidad, precio }) => acc + cantidad * precio,
      0
    );
  }
}

console.log("** Carrito de la compra normal **");
const carrito = new CarritoDeLaCompra();

carrito.cesta = cesta;
console.log("subtotal", carrito.subtotal);

console.log("total", carrito.total);

console.log("** Carrito de la compra extranjera **");
const carritoExtranjero = new CarritoExtranjero();
carritoExtranjero.cesta = cesta;
console.log("subtotal", carritoExtranjero.subtotal);
console.log("total", carritoExtranjero.total);
