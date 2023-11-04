// SPREAD (...)
// Iterable una estructura de datos a modo de coleccion, formada por items, elementos,  que se pueden recorrer

// Spread nos permite extender o difundir todos aquellos elementos de un objeto iterable en aquellos sitios donde se esperan 0, 1 o más elementos. Repartir los elementos.

// Spread en llamadas a funciones

const names = ["Javi", "Lissete", "Dani"];

const sayNames = (name1, name2, name3) => {
    console.log(name1)
    console.log(name2)
    console.log(name3)
}

sayNames(names[0], names[1], names[2])

//  esto se puede hacer con un spread

sayNames(...names);

// Spread en Arrays

const original = [1, 2, 3];
const copy = [...original];
console.log(copy);

// Spread en objetos

const objeto = {
    name: "Ramón",
    surname: "Montoya",
    age: 36,
}
const copy2 = {...objeto} //Me copia cada propiedad de objeto dentro de copy2
console.log(copy2);

            // Podemos mezclar dos objetos

            const id = {
                name: "Javi",
                surname: "Panadero"
            };
            const details = {
                age: 36,
                phone: 64578948
            }
            const user = {...id, ...details}
            console.log(user)
            // Si hubiesen propiedades con el mismo nombre la última macharía a la anterior

            // Puedo crear un objeto nuevo con las mismas propiedades y variar la que yo quiera

            const id_2 = {
                name: "Javi",
                surname: "Panadero"
            };
            const user_2 = {...id_2,
                            name: "Rafael"}
            console.log(user_2)