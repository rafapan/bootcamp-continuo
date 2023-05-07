// DNI

// const pattern = /^\d{2}\.?\d{3}\.?\d{3}(-|\s|_)?[a-zA-Z]$/;

const values = ['12345678Q', '12345678-Q', '12345678 Q', '12345678_Q', '12345678 q', '12.345.678 Q'];

// values.forEach(value => {
//   console.log('Regex matchs with ' + value + '? -> ', pattern.test(value))
// })

const pattern = /^(\d{2}\.?\d{3}\.?\d{3})(-|\s|_)?([a-zA-Z])$/;

values.forEach(value => {
  console.log('Regex matchs with ' + value + '? -> ', pattern.exec(value))
})


values.forEach(value => {
  console.log('Regex matchs with ' + value + '? -> ', value.match(pattern))
})