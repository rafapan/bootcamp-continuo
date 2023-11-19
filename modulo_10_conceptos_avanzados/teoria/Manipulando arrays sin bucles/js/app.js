const bookCollection = [
  {
    isbn: 23453,
    author: "J. Simmons",
    pages: 250,
    title: "The Dark",
    read: true,
  },
  {
    isbn: 56456,
    author: "Peter Black",
    pages: 120,
    title: "Feed",
    read: false,
  },
  {
    isbn: 43243,
    author: ["A. Smith", "F. Gant"],
    pages: 340,
    title: "Fire",
    read: true,
  },
  { isbn: 23223, author: undefined, pages: 260, title: "Eve", read: true },
  {
    isbn: 89232,
    author: "Anna Willis",
    pages: 610,
    title: "The Run",
    read: false,
  },
];

//  funciones que se pasan como argumentos de otras = Callbacks

// EVERY ========= te devuelve un true si todos los elementos de ese array cumplen una condicion.

// bookCollection.every(book => book.read === true ? true : false)

const allBooksRead = (books) => books.every((book) => book.read);
// bookCollection.every(book => book.read)
//Voy a decirle si todos los libros se han leido (red: tre)

// modo clasico
// const allBooksRead = books => {
//   for (const book of books) {
//     if (!book.read) return false
//   }
//   return true;
// }

console.log(allBooksRead(bookCollection));

//  SOME ========= Devuelve true si al menos un elemento lo cumple.
const anyBookRead = (books) => books.some((book) => book.read);

// Forma clásica
// const anyBookRead = books => {
//   for (const book of books) {
//     if (book.read) return true;
//   }
//   return false;
// }
console.log(anyBookRead(bookCollection)); // true

//  FIND ========= Buscar el primer elemento del array que cumple la condición que queramos
const findEveBook = (books) => books.find((book) => book.title === "Eve");
console.log(findEveBook(bookCollection));

// Hay una version que nos devuelve el indice findIndex
const findEveBook2 = (books) => books.findIndex((book) => book.title === "Eve");
console.log(findEveBook2(bookCollection));

// Que nos encuentre el primer autor que sea desconocido (undefinded)
const findUnknownAuthorBook = (books) => books.find((book) => !book.author);
console.log(findUnknownAuthorBook(bookCollection));

// FILTER ======== Fitra. Tu me das un array y yo te devuelvo otro nuevo pero filtrado

const unreadBooks = (books) => books.filter((book) => book.read === false);
console.log(unreadBooks(bookCollection));

// nos quedamos con los libros con numero de paginas mayores a 300 - Se pueden hacer doble filtrado añadiendo otro .filter
const booksOver300Pages = (books) => books.filter((book) => book.pages >= 300);
console.log(booksOver300Pages(bookCollection));

// Selecciona los que son array. Busca en los autores que son arrays
const multiAuthorBooks = (books) =>
  books.filter((book) => Array.isArray(book.author));
console.log(multiAuthorBooks(bookCollection));

//  FOREACH ===== Hace un bucle

// Funcion que me muestre todos los titulos por consola
const showTitles = (books) => books.forEach((b) => console.log(b.title));
showTitles(bookCollection);

// SORT ====== Ordenar, te reordena el propio ARRAY
// Voy a ordenarlos por longitud de página
const sortByLength = (books) =>
  books.sort((a, b) => (a.pages > b.pages ? 1 : -1)); // Se le pasan dos elementos del array, y le tengo que decir cual es mayor que otro. Si me devuelve un valor negativo = a va delante de b. Si el valor es positivo es que b se coloca antes de a. Si devuelve 0 los deja igual.
sortByLength(bookCollection);
console.log(bookCollection);

// JOIN ===== Te concatena los elementos de ese array agrupandolos en un array.

const sample1 = ["Javi", "Lissette", "Dani"];
const sample2 = ["Texto", 43, true];
console.log(sample1.join("-"));  // Le puedo especificar con que caracter quiero que los separe. Por defecto los separaría con comas.
console.log(sample2.join(" & ")); // Hace casting a string de los elementos.
