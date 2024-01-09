console.log('property-list funciona');

// qué es lo que vamos a necesitar mostrar en las cards de los inmuebles.
/*
Property {
    id: string,
    title: string,
    rooms: string; // nos vendrá un número y le añadiremos la palabra "habitaciones"
    squearMeter: string; // 136m2
    notes: string // vamos a a truncarla, es decir, cuando llegue a x caracteres lo cortaremos. A los 140 chars
    price: string // vendrá un número y le añadimos el "€"
    image: string; // cogemos la primera imagen que nos venga del array de imagen en base 64
}
*/

import { getPropertyList } from './property-list.api';
import { mapPropertyListFromApiToViewModel } from './property-list-mappers';
import { addPropertyRows } from './property-list.helpers';

getPropertyList().then((propertyList) => {
  const viewModelPropertyList = mapPropertyListFromApiToViewModel(propertyList);
  addPropertyRows(viewModelPropertyList);
});
