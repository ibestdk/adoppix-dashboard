import axios from 'axios';
import { getToken } from './authorize';

const token = getToken();

export const getWithdrawRequests = async () => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  };

  const wr = await axios({
    method: 'get',
    url: 'https://api.backoffice.adoppix.com/api/withdraw/request',
    headers: headers,
  }).catch((err) => console.log(err));

  return wr.data.data;
};

export const approveWithdraw = async (id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  };

  await axios({
    method: 'post',
    url: `https://api.backoffice.adoppix.com/api/withdraw/${id}/accept`,
    headers: headers,
  }).catch((err) => console.log(err));
}

export const rejectWithdraw = async (id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  };

  await axios({
    method: 'post',
    url: `https://api.backoffice.adoppix.com/api/withdraw/${id}/reject`,
    headers: headers,
  }).catch((err) => console.log(err));
}