const patterncase1 = /^(\d{4})[\s|-]?([A-Z]{3})$/;

const valuescase1 = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA']

valuescase1.forEach(value => {
  console.log('Caso 2 ' + value + ' -> ', patterncase1.test(value))
})

valuescase1.forEach(value => {
  console.log('Caso 2 ' + value + '? -> ', value.match(patterncase1))
})