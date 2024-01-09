import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`; // apunta data.json de server a properties que es donde están los detalles del inmueble

export const getPropertyList = () =>
  Axios.get(url).then((response) => {
    return response.data;
  });

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () =>
  Axios.get(saleTypeListUrl).then((response) => {
    return response.data;
  });

const provincesListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getprovincesList = () =>
  Axios.get(provincesListUrl).then((response) => {
    return response.data;
  });
