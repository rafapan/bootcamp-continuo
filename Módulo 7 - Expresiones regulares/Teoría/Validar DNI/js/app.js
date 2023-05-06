// 127.0.0.1

const pattern = /^(\d{1,3}\.){3}\d{1,3}$/;

const values = ['127.0.0.1', 'A.0.0.1', '-1.52.45.233', '10.98.199.1', 'AA 123.22.22.0 NN']

values.forEach(value => {
  console.log('Regex matchs with ' + value + '? -> ', pattern.test(value))
})