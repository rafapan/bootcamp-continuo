const empleado = {
    bruto: 25000,
    hijos: 1,
    pagas: 14
}

console.log("Bruto anual del empleado:", empleado.bruto + " €");

let retencion;

if (empleado.bruto < 12000) {
    console.log("Se le aplica una retención del 0%");
    retencion = 0
} else if (empleado.bruto < 24000 && empleado.bruto >= 12000) {
    console.log("Se le aplica una retención del 8%");
    retencion = 0.08
} else if (empleado.bruto < 34000 && empleado.bruto >= 24000) {
    console.log("Se le aplica una retención del 16%");
    retencion = 0.16
} else if (empleado.bruto >= 34000) {
    console.log("Se le aplica una retención del 30%");
    retencion = 0.3;
}

if (empleado.hijos > 0) {
    retencion = retencion - 0.02;
    console.log("Tiene hijos así que la retención se ve reducida 2 puntos");
}

let netoAnual = empleado.bruto - (empleado.bruto * retencion);
let netoMensual = netoAnual / empleado.pagas;

console.log("Sueldo neto al mes:", netoMensual + " €");