const users = getUsers(); // Primero vamos a obetener todos los usuarios

const nodes = []; // creamos un array vacio de nodos al que le iremos añadiendo por cada obejeto usuario de users para ir añadiendo el resultado de llamar a getUserNode(user)

for (let user of users) {
    const node = getUserNode(user); //En cada iteración objengo un usuario, un nodo 
    nodes.push(node); // y lo voy sumando al array nodes
}

window.onload = function() { // cuando carge el objeto window, cuando acabe de cargar el documento vamos a recorrer cada uno de esos nodos que hemos generado para añadirlos a un elemento root de nuestro html.
    for(let node of nodes) {
        document.getElementById("root").append(node);
    }
}