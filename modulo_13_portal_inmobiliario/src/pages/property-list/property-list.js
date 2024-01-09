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

import {
  getPropertyList,
  getSaleTypeList,
  getprovincesList,
} from './property-list.api';
import { mapPropertyListFromApiToViewModel } from './property-list-mappers';
import { addPropertyRows, setOptions } from './property-list.helpers';

// hacemos todas las peticiones a la vez y una vez que esten todas hechas se actua.
Promise.all([getPropertyList(), getSaleTypeList(), getprovincesList()]).then(
  (resultList) => {
    // const propertyList = resultList[0];
    // const saleTypeList = resultList[1];
    // const provinceList = resultList[2];
    const [propertyList, saleTypeList, provinceList] = resultList;
    loadPropertyList(propertyList);
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provinceList, 'select-province', '¿Dónde?');
  }
);

// getPropertyList().then((propertyList) => {
//   const viewModelPropertyList = mapPropertyListFromApiToViewModel(propertyList);
//   addPropertyRows(viewModelPropertyList);
// });
// De la siguiente forma creamos un metodo que se cumpla cuando la promisa de todos se haga

const loadPropertyList = (propertyList) => {
  const viewModelPropertyList = mapPropertyListFromApiToViewModel(propertyList);
  addPropertyRows(viewModelPropertyList);
};
