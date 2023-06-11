import axios from "axios"; // importar la libretía

// axios.get("https://api.github.com/orgs/lemoncode/members").then(response => {
//   console.log(response);
//   console.log(response.data);

//   for (item of response.data) {
//     document.write(item.login)
//   }
// });

axios
  .get("https://api.github.com/orgs/lemoncode/members")
  .then((response) => {
    return response.data;
  })
  .then(data => {
    for (let item of data) {
      document.write(item.login);
    }
  })
  .catch(error => {
    document.write("Error");
  });

// Es lo mismo que a continuación con fetch

// fetch("https://api.github.com/orgs/lemoncode/members")
//   .then((response) => {
//     return response.json(); // necesitamos un return para recoger los datos. Indica el resultado que va a recibir el próximo .then
//     // console.log(response);
//   })
//   .then((data) => {
//     for (item of data) {
//       document.write(item.login);
//     } // una vez recogidos los datos podemos tratarlos en este siguiente .then
//   })
//   .catch((error) => {
//     document.write("Se ha producido un error en la llamada a la API");
//   });
