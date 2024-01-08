const validatorToday = 'Day validations';
const today = new Date();

export const myValidatorDay = (theDay) => {
  const { value } = theDay;
  const myValue = parseInt(value);
  const result = {
    succeeded: false,
    type: validatorToday,
    message: 'Debe introducir un día válido',
  };

  const getMonth = document.getElementById('month').value;
  const getYear = document.getElementById('year').value;

  if (getYear > today.getFullYear() || getMonth > today.getMonth() + 1) {
    if (myValue <= 31) {
      result.succeeded = true;
      result.message = '';
    }
  } else if (myValue > today.getDate() && myValue <= 31) {
    result.succeeded = true;
    result.message = '';
  }
  return result;
};

export const myValidatorMonth = (theMonth) => {
  const { value } = theMonth;
  const myValue = parseInt(value);
  const result = {
    succeeded: false,
    type: validatorToday,
    message: 'Debe introducir un mes válido',
  };

  const getYear = document.getElementById('year').value;
  if (getYear > today.getFullYear()) {
    result.succeeded = true;
    result.message = '';
  } else if (myValue >= today.getMonth() + 1 && myValue <= 12) {
    result.succeeded = true;
    result.message = '';
  }
  return result;
};

export const myValidatorYear = (theYear) => {
  const { value } = theYear;
  const myYearValue = parseInt(value);
  const result = {
    succeeded: false,
    type: validatorToday,
    message: 'Debe introducir un año válido',
  };

  if (myYearValue >= today.getFullYear()) {
    result.succeeded = true;
    result.message = '';
  }
  return result;
};
