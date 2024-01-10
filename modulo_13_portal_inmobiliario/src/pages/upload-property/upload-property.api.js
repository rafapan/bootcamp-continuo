import Axios from 'axios';

const equipmentListUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentList = () =>
  Axios.get(equipmentListUrl).then((response) => {
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

const posttNewPropertyUrl = `${process.env.BASE_API_URL}/properties`;

export const posttNewProperty = (property) =>
  Axios.post(`${posttNewPropertyUrl}`, property).then(({ data }) => data);
