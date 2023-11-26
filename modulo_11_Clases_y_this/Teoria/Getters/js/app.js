
// Getters y Setters
class TotalesDepartamento {
  constructor(descuento) {
    this.descuento = descuento;
    this.subtotal = 30;
  }

  get total() {
    return this.subtotal - (this.descuento * this.subtotal) / 100;
  }

}
const totalesPerfumeria = new TotalesDepartamento(10);
totalesPerfumeria.subtotal = 50;
console.log("Total Perfumería: ", totalesPerfumeria.total);


