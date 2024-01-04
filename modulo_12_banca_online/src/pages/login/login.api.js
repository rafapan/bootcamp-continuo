import Axios from "axios";

const url = `${process.env.BASE_API_URL}/login`;

// métodos axios
// get - obtener datos
// post - para insertar datos
// put - actualizar datos
// delete - borrar datos

export const isValidLogin = login =>
  Axios.post(url, login).then((response) => {
    return response.data;
  });
