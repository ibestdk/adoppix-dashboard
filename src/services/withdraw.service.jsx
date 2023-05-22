import axios from 'axios';
import { getToken } from './authorize';

const token = getToken();

export const getWithdrawRequests = async () => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  };

  const wr = await axios({
    method: 'GET',
    url: 'https://localhost:7179/api/withdraw/request',
    headers: headers,
  }).catch((err) => console.log(err));

  return wr.data.data;
};
