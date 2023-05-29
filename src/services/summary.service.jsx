import axios from 'axios';
import { getToken } from './authorize';
const token = getToken();

export const getSummary = async (month, year) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  };

  let urlAPI = 'https://localhost:7179/api/dashboard/summary?';
  if (month !== null) urlAPI += `month=${month}`;
  if (year !== null) urlAPI += `year=${year}`;

  const wr = await axios({
    method: 'get',
    url: 'https://localhost:7179/api/dashboard/summary',
    headers: headers,
  }).catch((err) => console.log(err));

  return wr.data;
};
