var producto = {
    nombre: "",
    descripcion: "",
};

producto.nombre = prompt("Introduce el nombre del producto");

document.getElementById("product-name").innerHTML = "Zapatillas " + producto.nombre;

producto["descripcion"] = prompt ("Introduce una descripción");

document.getElementById("product-description").innerHTML = producto["descripcion"];

console.log(producto);


var name = "hola";