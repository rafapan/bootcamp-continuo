/**
 * Recuperar los valores del formulario de Datos generales.
 * Crear validaciones necesarias de dicho formulario.
 * Recuperar los valores del formulario de Datos de la vivienda.
 * Crear validaciones necesarias de dicho formulario.
 * Recuperar los valores del formulario de Subir fotos.
 * Crear mapper para cumplir con el modelo de la api.
 * Crear método post para enviar información del formulario.
 */
console.log('subir una propiedad');
import { history } from '../../core/router/history';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import {
  setOptionList,
  setCheckboxList,
  formatCheckboxId,
} from './upload-property.helpers';
import { formValidation } from './upload-property.validations';
import {
  getprovincesList,
  getSaleTypeList,
  getEquipmentList,
} from './upload-property.api';

let formUpload = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  address: '',
  city: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  province: '',
  saleTypes: [],
  saleTypesId: [],
};

onUpdateField('title', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  formUpload = { ...formUpload, title: value };
  formValidation.validateField('title', formUpload.title).then((result) => {
    onSetError('title', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  formUpload = { ...formUpload, notes: value };
  formValidation.validateField('notes', formUpload.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('email', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  formUpload = { ...formUpload, email: value };
  formValidation.validateField('email', formUpload.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('phone', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  formUpload = { ...formUpload, phone: value };
  formValidation.validateField('phone', formUpload.phone).then((result) => {
    onSetError('phone', result);
  });
});

onUpdateField('price', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  formUpload = { ...formUpload, price: value };
  formValidation.validateField('price', formUpload.price).then((result) => {
    onSetError('price', result);
  });
});

// onUpdateField('saleTypes', (event) => {
//   const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
//   formUpload = { ...formUpload, saleTypes: value };
//   formValidation
//     .validateField('saleTypes', formUpload.saleTypes)
//     .then((result) => {
//       onSetError('saleTypes', result);
//     });
// });

onUpdateField('address', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  formUpload = { ...formUpload, address: value };
  formValidation.validateField('address', formUpload.address).then((result) => {
    onSetError('address', result);
  });
});
onUpdateField('city', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  formUpload = { ...formUpload, city: value };
  formValidation.validateField('city', formUpload.city).then((result) => {
    onSetError('city', result);
  });
});
onUpdateField('squareMeter', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  formUpload = { ...formUpload, squareMeter: value };
  formValidation
    .validateField('squareMeter', formUpload.squareMeter)
    .then((result) => {
      onSetError('squareMeter', result);
    });
});
onUpdateField('rooms', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  formUpload = { ...formUpload, rooms: value };
  formValidation.validateField('rooms', formUpload.rooms).then((result) => {
    onSetError('rooms', result);
  });
});
onUpdateField('bathrooms', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  formUpload = { ...formUpload, bathrooms: value };
  formValidation
    .validateField('bathrooms', formUpload.bathrooms)
    .then((result) => {
      onSetError('bathrooms', result);
    });
});
onUpdateField('locationUrl', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  formUpload = { ...formUpload, locationUrl: value };
  formValidation
    .validateField('locationUrl', formUpload.locationUrl)
    .then((result) => {
      onSetError('locationUrl', result);
    });
});

onSubmitForm('save-button', () => {
  formValidation.validateForm(formUpload).then((result) => {
    onSetFormErrors(result);
    //   if (result.succeeded) {
    //     insertMessage(formContact);
    //     alert('Hemos recibido su mensaje');
    //   }
    console.log(formUpload);
  });
});

onUpdateField('saleTypes', (event) => {
  const value = event.target.value;
  const isChecked = event.target.checked;

  formUpload = {
    ...formUpload,
    saleTypesId: isChecked
      ? [...formUpload.saleTypesId, value].sort()
      : formUpload.saleTypesId
          .filter((saleTypesId) => saleTypesId !== value)
          .sort(),
  };
});

Promise.all([getSaleTypeList(), getprovincesList(), getEquipmentList()]).then(
  ([checksSalesTypes, provinces, checksEquipments]) => {
    setCheckboxList(checksSalesTypes, 'saleTypes');
    // setEvents(checksSalesTypes);
    setOptionList(provinces, 'province');
    setCheckboxList(checksEquipments, 'equipments');
  }
);
