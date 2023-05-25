import axios from 'axios';
import { getToken } from './authorize';

const token = getToken();

export const getBanner = async () => {
  let response = await axios({
    method: 'get',
    url: `https://localhost:7179/api/Banner`,
    //   headers: headers,
  }).catch((err) => console.log(err.response));
  console.log('from api : ', response.data.data);
  return response.data.data;
};

export const deleteBanner = async (bannerId) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  };
  let response = await axios({
    method: 'delete',
    url: `https://localhost:7179/api/Banner/${bannerId}`,
    headers: headers,
  }).catch((err) => console.log(err.response));
  console.log('from api : ', response.data.data);
  return response.data.data;
};

export const uploadBannner = async (file, redirectUrl) => {
  const form = new FormData();
  form.append('Banner', file);
  form.append('RedirectUrl', redirectUrl);

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  };

  await axios({
    method: 'post',
    url: `https://localhost:7179/api/Banner`,
    headers: headers,
    data: form,
  }).catch((err) => console.log(err.response));
};
