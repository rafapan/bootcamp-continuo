class Animal {
  constructor(nombre, piernas, ruido) {
    this.tipo = "animal";
    this.nombre = nombre;
    this.piernas = piernas;
    this.ruido = ruido;
  }
  habla() {
    console.log(`${this.nombre} dice ${this.ruido}`);
  }
  anda() {
    console.log(`${this.name} camina con ${this.piernas} piernas`);
  }
  set cazacomida(comida) {
    this.comida = comida;
  }
  get come() {
    return `${this.nombre} se come ${this.comida || "nada grouaun"}`;
  }
}

class Loro extends Animal {
  constructor(nombre, patitas, escandalo) {
    // Llamos al constructos del padre usando super
    super(nombre, patitas, escandalo); // Constructor de la clase padre

    this.tipo = "loro";
  }

  habla(amo) {
    // habla del padre y lo llamamos a través de super
    super.habla();
    console.log(`Dame chocholatito ${amo}`);
  }
}

const laika = new Animal("Laika", 4, "woff");
laika.cazacomida = "huesos";
console.log(laika.come);

// Loro ("otro", 2, "pipas") pero además repite el nombre del amo, habla. Vamos a crear otra clase loro que hereda animal

const loro = new Loro("Paco", 17, "mucho ruido");
console.log(loro.come)

loro.habla("Lisa")