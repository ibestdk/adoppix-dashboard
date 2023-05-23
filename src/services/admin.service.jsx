import axios from 'axios';
import { getToken } from './authorize';
const token = getToken();
 
export const getAdmins = async () => {
    const headers = {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
    };

    const admins = await axios({
        method: 'get',
        url: 'https://localhost:7179/api/user',
        headers: headers,
    }).catch((err) => console.log(err));

    return admins.data.data;
}

export const disableToggle = async (id) => {
    const headers = {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
    };

    const result = await axios({
        method: 'get',
        url: `https://localhost:7179/api/user/${id}/disable-toggle`,
        headers: headers,
    }).catch((err) => console.log(err));

    return result.data.data;
}
