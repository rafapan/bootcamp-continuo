// Área de perfumería

// const subtotal = 30;
// const descuento = 10;
// const calculaTotal = (subtotal, descuento) => {
//   return subtotal - (descuento * subtotal) / 100;
// };
// console.log(calculaTotal(subtotal, descuento));

// Área de supermercado
// const subtotal = 50;
// const descuento = 20;
// const calculaTotal = (subtotal, descuento) => {
//   return subtotal - (descuento * subtotal) / 100;
// };
// console.log(calculaTotal(subtotal, descuento));

// Entrarían en conflicto ya que las variables son iguales y los dos devuelven subtotal.
// Definimos una clase. Es un tipo de función  y la variables que serían las variables se almacenan en un constructor

class TotalesDepartamento {
  constructor(descuento) {
    this.descuento = descuento;
    this.subtotal = 30;
    this.total = 0;
  }
  calculaTotal() {
    this.total = this.subtotal - (this.descuento * this.subtotal) / 100;
  }
}
const totalesPerfumeria = new TotalesDepartamento(10);
const totalesSupermercado = new TotalesDepartamento(20);

totalesPerfumeria.subtotal = 30;
totalesPerfumeria.calculaTotal();
console.log("Total Perfumería: ", totalesPerfumeria.total);

totalesSupermercado.subtotal = 50;
totalesSupermercado.calculaTotal();
console.log("Total Supermercado: ", totalesSupermercado.total);

// Getters y Setters