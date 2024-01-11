import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovements = () => Axios.get(url).then((response) => {
  return response.data;
});

export const getAccount = id => Axios.get(url, { params: { acountId: id } }).then((response) => {
  return response.data;
});

