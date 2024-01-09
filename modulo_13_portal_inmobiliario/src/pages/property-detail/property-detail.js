console.log('Página de detalles');
import { history } from '../../core/router/history';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { setPropertyValues } from './property-detail.helpers';
import {
  getPropertyDetails,
  getEquipmentList,
  insertMessage,
} from './property-detail.api';
import { mapPropertyDetailsFromApiToViewModel } from './property-detail.mappers';
// import { formValidation } from './property-detail.validations';

let property = {
  id: '',
  title: '',
  notes: '',
  price: '',
  city: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: '',
  equipmentIds: '',
  equipments: '',
  images: '',
  mainImage: '',
};

// let contact = {
//   email: '',
//   message: '',
// };

const params = history.getParams();
console.log(params); //Conseguimos el id que necesitamos
const isId = Boolean(params.id); //

// if (isId) {
//   Promise.all([getEquipmentList()]).then(([equipmentList]) => {
//     getPropertyDetails(params.id).then((apiProperty) => {
//       apiProperty.map((eachProperty) => {
//         if (params.id == eachProperty.id) {
//           const myEquipmentsIds = eachProperty.equipmentIds;
//           eachProperty.equipments = getMyEquipments(
//             equipmentList,
//             myEquipmentsIds
//           );
//           let propertyDetail = mapPropertyDetailsFromApiToVM(eachProperty);
//           setPropertyValues(propertyDetail);
//         }
//       });
//     });
//     console.log(params.id);
//   });
// } else {
//   history.back();
// }

if (isId) {
  console.log('funciona');
  console.log(params.id)
  getPropertyDetails(params.id).then((detailsList) => {
    property = detailsList[params.id - 1]
    console.log(property)
    setPropertyValues(property)
  });
} else {
  history.back();
}

// const getMyEquipments = (equipmentList, equipmentIds) => {
//   let myEquipments = Array();
//   equipmentList.map((equipment) => {
//     equipmentIds.map((equipId) => {
//       if (equipment.id == equipId) myEquipments.push(equipment.name);
//     });
//   });
//   return myEquipments;
// };

// VALIDACION DEL CUESTIONARIO DE ENVIO
// onUpdateField('email', (event) => {
//   const value = event.target.value;
//   contact = { ...contact, email: value };
//   formValidation.validateField('email', contact.email).then((result) => {
//     onSetError('email', result);
//   });
// });

// onUpdateField('message', (event) => {
//   const value = event.target.value;
//   contact = { ...contact, message: value };
//   formValidation.validateField('message', contact.message).then((result) => {
//     onSetError('message', result);
//   });
// });

// onSubmitForm('contact-button', () => {
//   formValidation.validateForm(contact).then((result) => {
//     onSetFormErrors(result);
//     if (result.succeeded) {
//       insertMessage(contact);
//       alert('El mensaje ha sido enviado');
//       history.back();
//     }
//   });
// });
