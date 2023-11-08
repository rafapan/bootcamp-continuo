const bookCollection = [
    { isbn: 23453, author: "J. Simmons", pages: 250, title: "The Dark", read: true },
    { isbn: 56456, author: "Peter Black", pages: 120, title: "Feed", read: false },
    { isbn: 43243, author: ["A. Smith", "F. Gant"], pages: 340, title: "Fire", read: true },
    { isbn: 23223, author: undefined, pages: 260, title: "Eve", read: true },
    { isbn: 89232, author: "Anna Willis", pages: 610, title: "The Run", read: false },
  ];
  
  // Con map parto de un array y en un bucle itera cada elemnto y me devuelve un array con los elemento transformados. 
  // Reduce hace un bucle, aplica una transformación a esos elementos pero devuelve un único dato de salida.
  
  // MAP
  // Dada la colección de libros solo quiero los títulos. Parto de un array y me devuelve otro array con mis transformaciones.
  
  const getTitleCollection = books => bookCollection.map(book => book.title); //¿En qué transformo el libro? Me quedo solo con el autor. Va a iterar por mi coleccion de libros, llamo al callback que le he pasado, itera, y devuelve un string con los títulos.
  console.log(getTitleCollection(bookCollection));
  
  // Quiero añadir información a esos libros
  const addOwner = (owner, books) => books.map(book => ({...book, owner})) //Necesito clonar el objeto con spread para que me genere un nuevo objeto y le añado owner
  console.log(addOwner("Javier", bookCollection));