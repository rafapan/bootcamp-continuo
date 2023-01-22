console.log(
  "%c1. Dado el siguiente array mostrar sus datos de 0 al valor final del array con los bucles dados en clase (while,do while, for...)",
  "color: red; font-weight: bold"
);

let Array1 = [25, 2.05, 1000, 63, 4.01, -9];

for (datos of Array1) {
  console.log(datos);
}

console.log("----");
console.log(
  "%c2. Dado el siguiente array de números, mostrar aquellos que sean mayores a 0",
  "color: red; font-weight: bold"
);

let Array2 = [14, 2, 2.02, 63, 0, -9];

for (datos of Array2) {
  if (datos > 0) {
    console.log("Mayor que 0: " + datos);
  }
}

console.log("----");
console.log(
  "%c3. Dado el array del ejercicio anterior separa ahora en un array los números mayores o iguales a 0, y en otro los que sean menores que 0, y mostrar los arrays con los resultados",
  "color: red; font-weight: bold"
);

function getMayores() {
  let ArrayMayores = [];
  for (datos of Array2) {
    if (datos >= 0) {
      ArrayMayores.push(datos);
    }
  }
  console.log(
    "Array resultante con números mayores o iguales que 0: " + ArrayMayores
  );
}

function getMenores() {
  let ArrayMenores = [];
  for (datos of Array2) {
    if (datos < 0) {
      ArrayMenores.push(datos);
    }
  }
  console.log("Array resultante con menores de 0: " + ArrayMenores);
}

getMayores();
getMenores();

console.log("----");
console.log(
  "%c4. Dado el array del ejercicio anterior, borra del array ORIGINAL, los que sean menores a 0 y muestra el array resultante. Pista: Utiliza el método splice usado en clase",
  "color: red; font-weight: bold"
);

let MayoresQueCero = [];
for (datos of Array2) {
  if (datos < 0) {
    MayoresQueCero = Array2.splice(Array2.indexOf(datos), 1);
  }
}
console.log(Array2);

console.log("----");
console.log(
  "%c5. Dado el siguiente array de objetos muestra en sentido inverso (del valor final al valor inicial).",
  "color: red; font-weight: bold"
);

var personas = [
  { id: 1, name: "Jhon" },
  { id: 2, name: "Doe" },
  { id: 3, name: "Clara" },
  { id: 4, name: "Elisa" },
  { id: 4, name: "Pedro" },
];

function mostrarObjetosArray() {
  // for (objeto of personas) {
  for (i = personas.length - 1; i >= 0; i--) {
    imprimirObjeto(personas[i]);
    console.log("-");
  }
}

function imprimirObjeto(objeto) {
  for (dato in objeto) {
    console.log(dato + ": " + objeto[dato]);
  }
}

mostrarObjetosArray();

console.log("----");
console.log(
  "%c6. Dado el siguiente array de objetos, mostrar solo aquellos que tengan una edad mayor o igual a 18.",
  "color: red; font-weight: bold"
);

var edadesPersonas = [
  { id: 1, name: "Jhon", age: 25 },
  { id: 2, name: "Doe", age: 8 },
  { id: 3, name: "Clara", age: 15 },
  { id: 4, name: "Elisa", age: 30 },
  { id: 4, name: "Pedro", age: 18 },
];

for (edad of edadesPersonas) {
  if (edad.age >= 18) {
    imprimirObjeto(edad);
  }
}

console.log("----");
console.log(
  "%c7. Dado el array de objetos del ejercicio anterior, insertar en un array aquellos que tengan una edad mayor o igual a 18 y los menores a 18 en otro array y mostrar los resultados.",
  "color: red; font-weight: bold"
);

let mayoresEdad = [];
let menoresEdad = [];

console.log("Las personas mayores de edad son:");
for (edad of edadesPersonas) {
  if (edad.age >= 18) {
    mayoresEdad.push(edad);
    imprimirObjeto(edad);
  }
}
console.log(mayoresEdad);
console.log("-");
console.log("Las personas menores de edad son:");
for (edad of edadesPersonas) {
  if (edad.age < 18) {
    menoresEdad.push(edad);
    imprimirObjeto(edad);
  }
}
console.log(menoresEdad);

console.log("----");
console.log(
  "%c8. Dado un array de hoteles, incrementa en 10 euros su precio aquellos que tengan menos de 10 habitaciones disponibles. Muestra tanto aquellos que cumplan dicha condición como los que no.",
  "color: red; font-weight: bold"
);

let hoteles = [
  {
    hoteId: 1,
    hotelName: "Jhon",
    availableRooms: 25,
    price: 10.2,
  },
  {
    hoteId: 2,
    hotelName: "Doe",
    availableRooms: 8,
    price: 4.25,
  },
  {
    hoteId: 3,
    hotelName: "Clara",
    availableRooms: 15,
    price: 14.3,
  },
  {
    hoteId: 4,
    hotelName: "Elisa",
    availableRooms: 30,
    price: 10,
  },
  {
    hoteId: 4,
    hotelName: "Pedro",
    availableRooms: 10,
    price: 8.1,
  },
];

let hotelesMenos10hab = [];

for (reservas of hoteles) {
  if (reservas.availableRooms < 10) {
    reservas.price += 10;
    hotelesMenos10hab.push(reservas);
  }
  imprimirObjeto(reservas);
  console.log("-");
}

console.log("----");
console.log(
  "%c9. Dado un array de hoteles, incrementa en 10 euros su precio aquellos que tengan menos de 10 habitaciones disponibles. Muestra solo aquellos que cumplan la condición en un array nuevo",
  "color: red; font-weight: bold"
);

for (reservas of hotelesMenos10hab) {
  imprimirObjeto(reservas);
}
console.log(hotelesMenos10hab);

console.log("----");
console.log(
  "%c10. º Dado el siguiente array de hotels y el html con un input de texto y un botón. Que muestre el siguiente mensaje si existe el hotel: El hotel Hotel 1 existe. Y mostrar el mensaje: El hotel Hotel 1 no existe en caso contrario. Pista: Usa un evento de javascript de los visto por ahora en el curso.",
  "color: red; font-weight: bold"
);

let hotelHtml = [
  { hoteId: 1, hotelName: "Hotel 1", availableRooms: 25, price: 10.2 },
  { hoteId: 2, hotelName: "Hotel 2", availableRooms: 8, price: 4.25 },
  { hoteId: 3, hotelName: "Hotel 3", availableRooms: 15, price: 14.3 },
  { hoteId: 4, hotelName: "Hotel 4", availableRooms: 30, price: 10 },
  { hoteId: 5, hotelName: "Hotel 5", availableRooms: 10, price: 8.1 },
];

var getName = () => document.getElementById("textBox").value; 

function comprobarHotel() {
  let existe = false;
  getName();
  for (hotel of hotelHtml) {
    if (getName() == hotel.hotelName) {
      existe = true;
    }
  }
  return existe;
}

function consoleExiste() {
  comprobarHotel();

  if (comprobarHotel() == true) {
    console.log('El hotel "' + getName() + '" SÍ existe');
  } else {
    console.log('El hotel "' + getName() + '" NO existe');
  }
}

document.getElementById("myButton").addEventListener("click", consoleExiste);

