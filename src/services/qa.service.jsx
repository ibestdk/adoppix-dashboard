import axios from 'axios';
import { getToken } from './authorize';
const token = getToken();

export async function getAllQA() {
    const headers = {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
    };

    const qas = await axios({
        method: 'get',
        url: 'https://localhost:7179/api/qa',
        headers: headers,
    }).catch((err) => console.log(err));

    return qas.data;
}

export async function toggleIsShow(id) {
    const headers = {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
    };

    const qas = await axios({
        method: 'post',
        url: `https://localhost:7179/api/qa/${id}/show-toggle`,
        headers: headers,
    }).catch((err) => console.log(err));

    return qas.data;
}

export async function replyQa(id, message) {
    const headers = {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
    };

    const reply = await axios({
        method: 'post',
        url: `https://localhost:7179/api/qa/${id}/reply`,
        headers: headers,
        data: {
            message: message
        }
    }).catch((err) => console.log(err));

    return reply.data;
} 

export async function getReplies(id) {
    const headers = {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
    };

    const reply = await axios({
        method: 'get',
        url: `https://localhost:7179/api/qa/${id}/reply`,
        headers: headers,
    }).catch((err) => console.log(err));

    return reply.data;
} 
