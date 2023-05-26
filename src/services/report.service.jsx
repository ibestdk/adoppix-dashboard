import axios from 'axios';
import { getToken } from './authorize';

const token = getToken();

export const getReports = async () => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  };

  const reports = await axios({
    method: 'GET',
    url: 'https://api.backoffice.adoppix.com/api/report',
    headers: headers
  }).catch((err) => console.log(err));

  return reports.data.data;
};


export const removeSync = async (id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  };

  await axios({
    method: 'delete',
    url: `https://api.backoffice.adoppix.com/api/report/${id}/post`,
    headers: headers
  }).catch((err) => console.log(err));
}

export const rejectSync = async (id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  };

  await axios({
    method: 'delete',
    url: `https://api.backoffice.adoppix.com/api/report/${id}`,
    headers: headers
  }).catch((err) => console.log(err));
}