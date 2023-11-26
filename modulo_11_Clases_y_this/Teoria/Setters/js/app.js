class TotalesDepartamento {
  constructor(descuento) {
    this.descuento = descuento;
    // this.subtotal = 0;
    this._subtotal = 0;
    this.total = 0;
  }
  // Cuando intento asignar un valor a subtotal lo que estoy haciendo es entrar por el setter 
  set subtotal(nuevoValor) {
    this._subtotal = nuevoValor;
    this.total = this._subtotal - (this.descuento * this._subtotal) / 100;
  }
}
const totalesPerfumeria = new TotalesDepartamento(10);
totalesPerfumeria.subtotal = 30;
console.log("Total Perfumería: ", totalesPerfumeria.total);
