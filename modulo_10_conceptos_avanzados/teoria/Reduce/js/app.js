const bookCollection = [
  { isbn: 23453, author: "J. Simmons", pages: 250, title: "The Dark", read: true },
  { isbn: 56456, author: "Peter Black", pages: 120, title: "Feed", read: false },
  { isbn: 43243, author: ["A. Smith", "F. Gant"], pages: 340, title: "Fire", read: true },
  { isbn: 23223, author: undefined, pages: 260, title: "Eve", read: true },
  { isbn: 89232, author: "Anna Willis", pages: 610, title: "The Run", read: false },
];

// Con map parto de un array y en un bucle itera cada elemnto y me devuelve un array con los elemento transformados. 
// Reduce hace un bucle, aplica una transformación a esos elementos pero devuelve un único dato de salida.

// REDUCE
// Vamos a intentar sumar todas las páginas de todos los libros de la colección

const getTotalPages = books => books.reduce((acc, book) => acc + book.pages, 0) //Hay que pasarle dos argumentos, primero el callback y luego tengo que decirle con que valor empiezo, el valor de partida del acumulado. ACC (Acumulado) es el valor acumulado, hay que ponerlo.
console.log(getTotalPages(bookCollection));

// En este caso vamos a reducir toda la coleccion de libros a un único string en el que aparezcan concatenados todos los títulos de libros.

const getTitlesString = books => books.reduce((acc, book) => acc + " | " + book.title, "")
console.log(getTitlesString(bookCollection));

const getTitlesString_v2 = books => books.map(book => book.title).join(" | ");
console.log(getTitlesString_v2(bookCollection));

// Ahora vamos a obtener el número de libros no leidos
const getNumerUnread = books => books.reduce((acc, book) => { if (!book.read) acc++; return acc }, 0)
console.log(getNumerUnread(bookCollection));

//Obtener el número de páginas leídas
// Primero filtro y me quedo solo con los que he leído. Luego un reduce y obtengo el numero total de páginas leídos
const getAllReadPages = books =>
  books.filter(book => book.read).reduce((sumPages, book) => sumPages + book.pages, 0);
console.log(getAllReadPages(bookCollection));

// Extraer una lista ordenada con todos los libros que no he leido 
const extractUnreadBooksSorted = books =>
  books
    .filter(book => !book.read) // Solo quiero los libros que no he leido
    .map(book => ({ title: book.title, pages: book.pages })) // Me quedo solo con el título y las páginas que tiene.
    .sort((a, b) => b.pages - a.pages);   //TIME 36:00
console.log(extractUnreadBooksSorted(bookCollection));


const getSortedTitles = books =>
  books
    .map(book => book.title)
    .sort() // Si no le paso función de comparación sigue ordenación alfabética por defecto
    .join(", ");
console.log(getSortedTitles(bookCollection));
