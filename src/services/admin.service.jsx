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
        url: 'https://api.backoffice.adoppix.com/api/user',
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
        url: `https://api.backoffice.adoppix.com/api/user/${id}/disable-toggle`,
        headers: headers,
    }).catch((err) => console.log(err));
 
    return result.data;
}

export const registerAdmin = async (email, username, password) => {
    const headers = {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
    };
    let result;
    result = await axios({
        method: 'post',
        url: 'https://api.backoffice.adoppix.com/api/user/register-admin',
        headers: headers,
        data: {
            email: email,
            username: username,
            password: password
        }
    }).catch((err) => result = err.response);

    return result.data;
}