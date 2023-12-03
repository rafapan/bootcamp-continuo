const reservas = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

// CASO 1

class booking {
  constructor() {
    this._reservation = [];
    this._subtotal = 0;
    this._total = 0;
    this._discount = 0;
    this._listaPreciosHabitaciones = 0;
  }


  priceTypeRoom(typeRoom) {
    let precio = 0;
    switch (typeRoom) {
      case "standard":
        return precio = 100;
      case "suite":
        return precio = 150;
      default:
    }
  }
  
  set precioHabitacion(precio) {
    this._listaPreciosHabitaciones = this.priceTypeRoom(precio);
  }

  calculoPax(guests) {
    // if (guests > 1) {
    //   guests = (guests - 1) * 40
    // } else {
    //   guests = 0;
    // }
    // return guests;

    return guests > 1 ? (guests - 1) * 40 : 0;
  }
// Añadimos un campo a cada reserva en el que indicamos si el desayuno está incluido o no: en caso de estar incluido supone un cargo adicional de 15 € por persona y noche.
  calculoDesayuno(breakfast) {
    return breakfast === true ? 15 : 0;
  }

  calculoSubtotal() {
    this._subtotal = reservas.reduce(
      (acc, { noches, tipoHabitacion, pax, desayuno }) =>
        acc +
        noches * this.priceTypeRoom(tipoHabitacion) +
        this.calculoPax(pax) +
        this.calculoDesayuno(desayuno) * pax * noches,
      0
    );
  }

  calculoTotal() {
    this.calculoSubtotal();
    this._total = this._subtotal * 1.21;
  }

  get subtotal() {
    return this._subtotal;
  }
  get total() {
    return this._total + (this._total * this._discount);
  }

  set reservas(externalReserve) {
    this._reservas = externalReserve;
    this.calculoSubtotal();
    this.calculoTotal();
  }
}

class clienteParticular extends booking {
  constructor() {
    super();
  }
}

class bookingTourOperador extends booking {
  constructor() {
    super();
    this._priceTypeRoom = 100;
    this._discount = 0.15;
  }
  calculoSubtotal() {
    this._subtotal = reservas.reduce(
      (acc, { noches, pax }) =>
        acc +
        noches * this._priceTypeRoom + //Todas las habitaciones tienen el mismo precio (100 €)
        this.calculoPax(pax),
      0
    );
  }
}

const privateClient = new clienteParticular();
privateClient.reservas = reservas;
console.log("Subtotal = " + privateClient.subtotal + " €");
console.log("Subtotal = " + privateClient.total + " €");

const tourOperator = new bookingTourOperador();
tourOperator.reservas = reservas;
console.log("Subtotal = " + tourOperator.subtotal + " €");
console.log("Subtotal = " + tourOperator.total + " €");
