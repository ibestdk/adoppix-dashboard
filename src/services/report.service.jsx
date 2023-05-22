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
    url: 'https://localhost:7179/api/report',
    headers: headers
  }).catch((err) => console.log(err));

  return reports.data.data;
};
