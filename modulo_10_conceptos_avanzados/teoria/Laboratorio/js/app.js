console.log(
  "%cMódulo 10 - Conceptos Avanzados ES6 - Laboratorio",
  "color: blue; font-weight: bold; text-transform: uppercase"
);
console.log("----");
console.log("%cEjercicios Entregables", "color: blue; font-weight: bold;");

console.log(
  "%c1º hasId. Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true / false ).",
  "color: red; font-weight: bold"
);

const travelObject = {
  country: "Spain",
  price: 500,
  passengers: 3,
  id: 30,
};

const hasId = ({ id }) => (id ? true : false);
console.log(hasId(travelObject));

console.log(
  "%c2º head. Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.",
  "color: red; font-weight: bold"
);

weekend = [
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
];
const head = ([firstItem]) => firstItem;
console.log(head(weekend));

console.log(
  "%c3º tail. Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.",
  "color: red; font-weight: bold"
);

const tail = ([, ...restItems]) => restItems;
console.log(tail(weekend));

console.log(
  "%c4º swapFirstToLast. Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.",
  "color: red; font-weight: bold"
);

const swapFirstToLast = ([firstItem, ...restItems]) => [
  ...restItems,
  firstItem,
];
console.log(swapFirstToLast(weekend));

console.log(
  "%c5º excludeId. Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto la propiedad id si la hubiera.",
  "color: red; font-weight: bold"
);

const excludeId = ({ id, ...restItems }) => restItems;
console.log(excludeId(travelObject));

console.log(
  "%c6º wordsStartingWithA. Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.",
  "color: red; font-weight: bold"
);

const flowers = ["jacinto", "amapola", "lirio", "Azalea"];
const wordsStartingWithA = (words) =>
  words.filter((word) => word[0] === "a" || word[0] === "A");
console.log(wordsStartingWithA(flowers));

console.log(
  "%c7º concat. Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por | .",
  "color: red; font-weight: bold"
);

const concat = (string1, string2) => [
  string1.join(" | ") + " | " + string2.join(" | "),
];
console.log(concat(weekend, flowers));

console.log(
  "%c8º multArray. Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro que sea un número ( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.",
  "color: red; font-weight: bold"
);

const numbers = [1, 2, 3, 4, 5];
const multArray = (array, x) => array.map((number) => number * x);
console.log(multArray(numbers, 3));

console.log(
  "%c9º calcMult. Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.",
  "color: red; font-weight: bold"
);

const calcMult = (...numbers) => numbers.reduce((a, b) => a * b);
console.log(calcMult(10, 2, 5));

console.log("----");
console.log("%cEjercicios Extra", "color: blue; font-weight: bold;");
console.log(
  "%c1º swapFirstSecond. Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.",
  "color: red; font-weight: bold"
);

const swapFirstSecond = ([item1, item2, ...restItems]) => [
  item2,
  item1,
  ...restItems,
];
console.log(swapFirstSecond(weekend));

console.log(
  "%c2º firstEqual. Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.",
  "color: red; font-weight: bold"
);

const firstEqual = (x, ...myString) =>
  myString.every((myString) => myString.startsWith(x));
console.log(firstEqual("j", "jacinto", "jazmin"));

console.log(
  "%c3º longest. Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.",
  "color: red; font-weight: bold"
);

const longest = (...myString) =>
  myString.reduce((acc, string) => (acc.length > string.length ? acc : string));
console.log(longest(weekend, flowers));

console.log(
  "%c4º searchInStringV1. Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.",
  "color: red; font-weight: bold"
);

const searchInStringV1 = (x, myString) =>
  Array.from(myString).reduce((acc, character) => {
    if (character === x) acc++;
    return acc;
  }, 0);
console.log(searchInStringV1("a", "amapola"));

console.log(
  "%c5º searchInStringV2. Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2 , encontrando otra alternativa sin usar reduce .",
  "color: red; font-weight: bold"
);

const searchInStringV2 = (x, myString) =>
  Array.from(myString).filter((item) => (item === x) === true).length;
console.log(searchInStringV2("a", "amapola"));

console.log(
  "%c6º sortCharacters. Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.",
  "color: red; font-weight: bold"
);

const sortCharacters = (myArray) => Array.from(myArray).sort().join("");
console.log(sortCharacters("hola"));

console.log("----");
console.log("%cLista de la compra", "color: blue; font-weight: bold;");

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

console.log(
  "%cA. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.",
  "color: red; font-weight: bold"
);

const addIva = (items) =>
  items.map((item) => ({ ...item, IVA: (item.price * 0.21) }));
console.log(addIva(shoppingCart));

console.log(
  "%cB. Ordena la lista de más a menos unidades.",
  "color: red; font-weight: bold"
);

const orderShoppingCart = (items) =>
  items.sort((a, b) => (a.units < b.units ? 1 : -1));
console.log(orderShoppingCart(shoppingCart));

console.log(
  "%cC. Obtén el subtotal gastado en droguería.",
  "color: red; font-weight: bold"
);

const subtotalDrogueria = (items) =>
  items
    .filter((item) => item.category === "Droguería")
    .reduce((acc, item) => acc + item.price * item.units, 0);
console.log(subtotalDrogueria(shoppingCart));

console.log(
  "%cD. Obtén la lista por consola en formato 'Producto -> Precio Total €' y ordenada por categoría.",
  "color: red; font-weight: bold"
);

const getOrderedList = (items) => 
    items
    .map(
      (product) => product.product + " -> " + (product.price * product.units * 0.21) + " €"
    )
    .sort((a, b) => (a.category > b.category ? 1 : -1))
    .join(", ")
;
console.log(getOrderedList(shoppingCart));
