const patterncase1 = /^[A-Z]{2}\d{22}$/;

const valuescase1 = ['ES6600190020961234567890']

console.log('Caso 1 ->' + patterncase1.test(valuescase1));

const patterncase2 = /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/;

const valuescase2 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890']

valuescase2.forEach(value => {
  console.log('Caso 2 ' + value + '? -> ', patterncase2.test(value))
})

const patterncase3 = /^([A-Z]{2})\d{2}\s?\d{4}\s?\d{4}\s?(\d{2})\d{2}\s?\d{4}\s?\d{4}$/;

valuescase2.forEach(value => {
  console.log('Caso 3 ' + value + '? -> ', value.match(patterncase3))
})