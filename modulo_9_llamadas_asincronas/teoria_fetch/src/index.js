

fetch("https://api.github.com/orgs/lemoncode/members")
  .then((response) => {
    return response.json(); // necesitamos un return para recoger los datos. Indica el resultado que va a recibir el próximo .then
    // console.log(response);
  })
  .then((data) => {
    for (item of data) {
      document.write(item.login);
    } // una vez recogidos los datos podemos tratarlos en este siguiente .then
  })
  .catch((error) => {
    document.write("Se ha producido un error en la llamada a la API");
  });
