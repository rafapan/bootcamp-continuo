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
import {
  mapPropertyListFromApiToViewModel,
  mapFilterToQueryParams,
} from './property-list-mappers';
import { addPropertyRows, setOptions, clearPropertyRows } from './property-list.helpers';
import {
  roomOptions,
  bathroomOptions,
  minPriceOptions,
  maxPriceOptions,
} from './property-list.constants';
import { onUpdateField, onSubmitForm,  } from '../../common/helpers'; //El método onUpdateField recoge el dato introducido en un campo. El onSubnitForm es para probar que funciona al añadir un valor al campo de los filtros.

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
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño');
    setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
    setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');
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

// vamos a recoger los campos del formulario de filtros
let filter = {
  saleTypeId: '',
  provinceId: '',
  minRooms: '',
  minBathRooms: '',
  minPrice: '',
  maxPrice: '',
};

onUpdateField('select-sale-type', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    saleTypeId: value,
  };
});
onUpdateField('select-province', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    provinceId: value,
  };
});
onUpdateField('select-room', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    minRooms: value,
  };
});
onUpdateField('select-bathroom', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    minBathrooms: value,
  };
});
onUpdateField('select-min-price', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    minPrice: value,
  };
});
onUpdateField('select-max-price', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    maxPrice: value,
  };
});

onSubmitForm('search-button', () => {
  const queryParams = mapFilterToQueryParams(filter);
  clearPropertyRows(); //para limpiar el html y borra las cards que no corresponden con el filtro
  getPropertyList(queryParams).then((propertyList) => {
    loadPropertyList(propertyList);
  });
  //Para filtrar tenemos que convertir la url a la de json.server. `hhtp://localhost:3000/api/properties?rooms_gte=${filter.minRooms}` esta es la informacion que deberiamos mandar al sevridor para filter.
  console.log({ filter });
});
