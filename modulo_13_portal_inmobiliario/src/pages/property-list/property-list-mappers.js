// un mappers es una funcion. Mapeame una property desde la api al viewmodel
export const mapPropertyListFromApiToViewModel = (propertyList) => {
  return propertyList.map((property) =>
    mapPropertyFromApiToViewModel(property)
  );
};
const mapPropertyFromApiToViewModel = (property) => {
  return {
    id: property.id,
    title: property.title,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter} m2`,
    notes: `${property.notes.substring(0, 240)}...`, //metodo "substring" corta al numero de caracteres que queramos
    price: `${property.price.toLocaleString()} €`, //toLocalString nos va a formatear el precio y le va a añadir el . de los miles
    image: Array.isArray(property.images) ? property.images[0] : '', // para asegurarnos si no se ha sbido ninguna imagen pues preguntamos si hay un array. Si lo hay nos devuelve la primera imagen si no nos devuelve un string vacio.
  };
};

//creamos un metodo para que según haya mas de una o una habitación nos añada la palabra "habitaciones" o "habitacion"
const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitacion';
};

// creamos un mappers para variar la url para mandarselo al sevridor segun los filtros
export const mapFilterToQueryParams = (filter) => {
  let queryParams = '';

  if (filter.saleTypeId) {
    queryParams = `${queryParams}saleTypeIds_like=${filter.saleTypeId}&`; // Busca que el saleTypeIds coincida con el saleTypeId que le estoy pasando. Es un array y le pedimos que lo contenga
  }

  if (filter.provinceId) {
    queryParams = `${queryParams}provinceId=${filter.saleTypeId}&`; // que sea el mismo. Como no es una array no hay que ponerle _like
  }

  if (filter.minRooms) {
    queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`;
  }

  if (filter.bathRooms) {
    queryParams = `${queryParams}bathrooms_gte=${filter.bathRooms}&`;
  }

  if (filter.minPrice) {
    queryParams = `${queryParams}price_lte=${filter.minPrice}&`;
  }

  return queryParams.slice(0, -1); //Para quitar el último caracter y no me ponga al final de la url el último &
};
