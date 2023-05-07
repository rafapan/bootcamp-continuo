const patterncase1 = /^(5[0-5]\d{2})[\s|-]?(\d{4})[\s|-]?(\d{4})[\s|-]?(\d{4})$/;

const valuescase1 = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000']

valuescase1.forEach(value => {
  console.log('Caso 1 ' + value + ' -> ', patterncase1.test(value))
})

valuescase1.forEach(value => {
  console.log('Caso 2 ', value.match(patterncase1))
})