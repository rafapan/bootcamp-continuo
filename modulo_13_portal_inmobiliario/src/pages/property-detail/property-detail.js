console.log('Página de detalles');
import { history } from '../../core/router/history';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  onSetValues,
} from '../../common/helpers';
import { setPropertyValues } from './property-detail.helpers';
import {
  getPropertyDetails,
  getEquipmentList,
  insertMessage,
} from './property-detail.api';
import { mapPropertyDetailsFromApiToViewModel } from './property-detail.mappers';
import { formValidation } from './proporty-detail.validations';

// let property = {
//   id: '',
//   title: '',
//   notes: '',
//   price: '',
//   city: '',
//   squareMeter: '',
//   rooms: '',
//   bathrooms: '',
//   locationUrl: '',
//   mainFeatures: '',
//   equipmentIds: '',
//   equipments: '',
//   images: '',
//   mainImage: '',
// };

const params = history.getParams();
// console.log(params); //Conseguimos el id que necesitamos
const isId = Boolean(params.id); //

if (isId) {
  Promise.all([getPropertyDetails(params.id), getEquipmentList()]).then(
    ([detailsList, equipmentsType]) => {
      let idPropierty = params.id - 1;
      let viewModelDetailsList = mapPropertyDetailsFromApiToViewModel(
        detailsList[idPropierty]
      );
      viewModelDetailsList.equipments = getMyEquipments(
        equipmentsType,
        detailsList[idPropierty].equipmentIds
      );
      setPropertyValues(viewModelDetailsList);
    }
  );
} else {
  history.back();
}

const getMyEquipments = (equipment, propertiesEquipmentIds) => {
  let myArray = [];
  // Recorro el array de los equipamientos y por cada elemento recorro el de las propiedades. Si coinciden los Id sumo a myArray el name
  equipment.forEach((equipment) => {
    propertiesEquipmentIds.forEach((equipmentId) => {
      if (equipment.id === equipmentId) myArray.push(equipment.name);
    });
  });
  console.log(myArray);
  return myArray;
};

//  en este objeto vamos a guardar toda la información del login
let formContact = {
  email: '',
  message: '',
};
// segundo parámetro. lo que vamos a recoger es la funcion que queremos ejecutar cuando el usuario escriba en el input
onUpdateField('email', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  formContact = { ...formContact, email: value };
  formValidation.validateField('email', formContact.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('message', (event) => {
  const value = event.target.value;
  formContact = { ...formContact, message: value };
  formValidation
    .validateField('message', formContact.message)
    .then((result) => {
      onSetError('message', result);
    });
});

onSubmitForm('contact-button', () => {
  formValidation.validateForm(formContact).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      resetContactForm(formContact);
      insertMessage(formContact);
      // alert('Hemos recibido su mensaje');
    }
    console.log(formContact);
  });
});

const resetContactForm = (formContact) => {
  formContact = {
    ...formContact,
    email: '',
    message: '',
  };
  return onSetValues(formContact);
};
