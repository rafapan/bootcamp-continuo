// un mappers es una funcion. Mapeame una property desde la api al viewmodel
export const mapPropertyListFromApiToViewModel = (properytList) => {
    return properytList.map((property) => mapPropertyFromApiToViewModel(property))
};
const mapPropertyFromApiToViewModel = (property) => {
    return {
        id: property.id,
        title: property.title,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter} m2`,
        notes: `${property.notes.substring(0, 240)}...`, //metodo "substring" corta al numero de caracteres que queramos
        price: `${property.price.toLocaleString()} €`, //toLocalString nos va a formatear el precio y le va a añadir el . de los miles
        image: Array.isArray(property.images) ? property.images[0] : '' // para asegurarnos si no se ha sbido ninguna imagen pues preguntamos si hay un array. Si lo hay nos devuelve la primera imagen si no nos devuelve un string vacio.
    }
}

//creamos un metodo para que según haya mas de una o una habitación nos añada la palabra "habitaciones" o "habitacion"
const getRoomWord = (rooms) => {
    return rooms > 1 ? 'habitaciones' : 'habitacion';
}