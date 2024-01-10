import { Validators, createFormValidation } from '@lemoncode/fonk';
import {
  myValidatorDay,
  myValidatorMonth,
  myValidatorYear,
} from './trasnfer.custom.validators';

const validationSchema = {
  field: {
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern:
            /[A-Z]\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}|ES\d{22}/,
        },
        message: 'El IBAN no es correcto',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /[0-9]/ },
        message: 'Cantidad no correcta',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      }
    ],
    day: [
      {
        validator: myValidatorDay,
      },
    ],
    month: [
      {
        validator: myValidatorMonth,
      },
    ],
    year: [
      {
        validator: myValidatorYear,
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
