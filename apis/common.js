import fetch from 'isomorphic-unfetch';
import config from '../config';

export const getapi = async (api) => {
    const req  = await fetch(config.api + api);
    return await req.json();
};

export const postapi = async (api, body) => {
    const req  = await fetch(config.api + api, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    return await req.json();
}

export const putapi = async (api, body) => {
    const req  = await fetch(config.api + api, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    return await req.json();
}

export const removeapi = async (api, body) => {
    const req  = await fetch(config.api + api, {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    return await req.json();
}
