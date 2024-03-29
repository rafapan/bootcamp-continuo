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
import { mapnewPropertyFromVMTOAPI } from "./upload-property.mappers";
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  onAddFile,
} from '../../common/helpers';
import {
  setOptionList,
  setCheckboxList,
  formatCheckboxId,
  onAddFeature,
  onRemoveFeature,
  formatDeleteFeatureButtonId,
  onAddImage,
} from './upload-property.helpers';
import { formValidation } from './upload-property.validations';
import {
  getprovincesList,
  getSaleTypeList,
  getEquipmentList,
  posttNewProperty,
} from './upload-property.api';

let newProperty = {
  id: '',
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  address: '',
  city: '',
  provinceId: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  province: '',
  saleTypes: [],
  saleTypesId: [],
  images: [],
  equipments: [],
  equipmentId: [],
  mainFeatures: [],
};

onUpdateField('title', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  newProperty = { ...newProperty, title: value };
  formValidation.validateField('title', newProperty.title).then((result) => {
    onSetError('title', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  newProperty = { ...newProperty, notes: value };
  formValidation.validateField('notes', newProperty.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('email', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  newProperty = { ...newProperty, email: value };
  formValidation.validateField('email', newProperty.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('phone', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  newProperty = { ...newProperty, phone: value };
  formValidation.validateField('phone', newProperty.phone).then((result) => {
    onSetError('phone', result);
  });
});

onUpdateField('price', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  newProperty = { ...newProperty, price: value };
  formValidation.validateField('price', newProperty.price).then((result) => {
    onSetError('price', result);
  });
});

onUpdateField('address', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  newProperty = { ...newProperty, address: value };
  formValidation
    .validateField('address', newProperty.address)
    .then((result) => {
      onSetError('address', result);
    });
});
onUpdateField('city', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  newProperty = { ...newProperty, city: value };
  formValidation.validateField('city', newProperty.city).then((result) => {
    onSetError('city', result);
  });
});
onUpdateField('province', (event) => {
  const value = event.target.value;
  newProperty = { ...newProperty, provinceId: value };
  formValidation
    .validateField('province', newProperty.provinceId)
    .then((result) => {
      onSetError('province', result);
    });
});
onUpdateField('squareMeter', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  newProperty = { ...newProperty, squareMeter: value };
  formValidation
    .validateField('squareMeter', newProperty.squareMeter)
    .then((result) => {
      onSetError('squareMeter', result);
    });
});
onUpdateField('rooms', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  newProperty = { ...newProperty, rooms: value };
  formValidation.validateField('rooms', newProperty.rooms).then((result) => {
    onSetError('rooms', result);
  });
});
onUpdateField('bathrooms', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  newProperty = { ...newProperty, bathrooms: value };
  formValidation
    .validateField('bathrooms', newProperty.bathrooms)
    .then((result) => {
      onSetError('bathrooms', result);
    });
});
onUpdateField('locationUrl', (event) => {
  const value = event.target.value; //cuando el usuario pulse una tecla en el input nos proporciona este método el evento
  newProperty = { ...newProperty, locationUrl: value };
  formValidation
    .validateField('locationUrl', newProperty.locationUrl)
    .then((result) => {
      onSetError('locationUrl', result);
    });
});

const setEvents = (list, ID) => {
    list.forEach((el) => {
      const id = formatCheckboxId(el);
      onUpdateField(id, (event) => {
        const value = event.target.value;
        if (event.target.checked === true) {
          newProperty = addElement(value, newProperty, ID);
        } else {
          newProperty = removeElement(value, newProperty, ID);
        }
      });
    });
  };
  
  const addElement = (value, obj, id) => {
    return { ...obj, [id]: [...obj[id], value] };
  };
  
  const removeElement = (value, obj, id) => {
    return { ...obj, [id]: [...obj[id].filter((element) => element !== value)] };
  };

onSubmitForm('insert-feature-button', () => {
  const value = document.getElementById('newFeature').value;
  if (value) {
    const value = document.getElementById('newFeature').value;
    if (value) {
      const deleteId = formatDeleteFeatureButtonId(value);
      newProperty = addElement(value, newProperty, 'mainFeatures');
      onAddFeature(value);
      onSubmitForm(deleteId, () => {
        onRemoveFeature(value);
        newProperty = removeElement(value, newProperty, 'mainFeatures');
      });
    }
  }
});

onAddFile('add-image', event => {
    onAddImage(event);
    console.log(event)
    const value = event
    newProperty = addElement(value, newProperty, 'images');
})


Promise.all([getSaleTypeList(), getprovincesList(), getEquipmentList()]).then(
  ([checksSalesTypes, provinces, checksEquipments]) => {
    setCheckboxList(checksSalesTypes, 'saleTypes');
    setOptionList(provinces, 'province');
    setCheckboxList(checksEquipments, 'equipments');

    setEvents(checksSalesTypes, 'saleTypes');
    setEvents(checksEquipments, 'equipments');
  }
);

onSubmitForm('save-button', () => {
  formValidation.validateForm(newProperty).then((result) => {
    onSetFormErrors(result);
      if (result.succeeded) {
        const newPropertyToApi = mapnewPropertyFromVMTOAPI(newProperty)
        posttNewProperty(newPropertyToApi);
        alert('Nueva propiedad añadida');
      }
    
    // console.log(newProperty);
  });
});
