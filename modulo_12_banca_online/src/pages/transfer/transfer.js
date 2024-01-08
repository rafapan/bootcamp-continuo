import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
  onSetValues,
} from '../../common/helpers';
import { setAccountOptions } from './transfer.helpers';
import { formValidation } from './transfer.validations';
import { insertTransfer, getTransfer } from './transfer.api';
import { history } from '../../core/router';

let transfer = {
  id: '',
  select: 1,
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  day: '',
  month: '',
  year: '',
  email: '',
};

const params = history.getParams();
getTransfer().then((accountList) => {
  onSetValues(setAccountOptions(accountList, params.id));
});

onUpdateField('select-account', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, select: value };
  formValidation
    .validateField('select-account', transfer.select)
    .then((result) => {
      onSetError('select-account', result);
    });
});

onUpdateField('iban', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, iban: value };
  formValidation.validateField('iban', transfer.iban).then((result) => {
    onSetError('iban', result);
  });
});

onUpdateField('name', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, name: value };
  formValidation.validateField('name', transfer.name).then((result) => {
    onSetError('name', result);
  });
});

onUpdateField('amount', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, amount: value };
  formValidation.validateField('amount', transfer.amount).then((result) => {
    onSetError('amount', result);
  });
});

onUpdateField('concept', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, concept: value };
  formValidation.validateField('concept', transfer.concept).then((result) => {
    onSetError('concept', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, notes: value };
});
onUpdateField('year', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, year: value, date: `${value}-${month}-${day}` };
  formValidation.validateField('day', transfer.day).then((result) => {
    onSetError('day', result);
  });
});
onUpdateField('month', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, month: value, date: `${year}-${value}-${day}` };
  formValidation.validateField('month', transfer.month).then((result) => {
    onSetError('month', result);
  });
});

onUpdateField('day', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, day: value, date: `${year}-${month}-${value}` };
  formValidation.validateField('day', transfer.day).then((result) => {
    onSetError('day', result);
  });
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, email: value };
  formValidation.validateField('email', transfer.email).then((result) => {
    onSetError('email', result);
  });
});

const validatorDate = (day, month, year) => {
  const dateObject = new Date();
  const stringToday =
    dateObject.getMonth() -
    1 +
    '/' +
    dateObject.getDate() +
    '-' +
    dateObject.getFullYear();
  const myToday = new Date(stringToday);

  const stringDate = month + '-' + day + '-' + year;
  const myDate = new Date(stringDate);

  return myDate > myToday ? true : false;
};

const onSave = () => {
  return insertTransfer(transfer);
};

onSubmitForm('transfer-button', () => {
  formValidation.validateForm(transfer).then((result) => {
    onSetFormErrors(result);
    if (validatorDate(transfer.day, transfer.month, transfer.year)) {
      if (result.succeeded) {
        onSave().then(() => {
          history.back();
        });
      }
    }
  });
});
