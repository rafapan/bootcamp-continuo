import Axios from 'axios';
const url = `${process.env.BASE_API_URL}/account`;

// insert insertar nueva cuenta. Nos pasan esa cuenta y el metodo post para insertarla, pasándole la cuenta que queremos insertar, le pasamos a la url el id de la cuenta y la cuenta y cuando se resuelva nos devolvera los datos con el id ya generado en el servidor
export const insertAccount = (account) =>
  Axios.post(`${url}/${account.id}`, account).then((response) => {
    return response.data;
  });
// get obtener los datos actuales mediante un id
export const getAccount = (id) =>
  Axios.get(`${url}/${id}`).then((response) => {
    return response.data;
  });
// update actualizar la cuenta

export const updateAccount = (account) =>
  Axios.put(`${url}/${account.id}`, account).then((response) => {
    return response.data;
  });
