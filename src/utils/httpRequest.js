import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options) => {
    const { data } = await httpRequest.get(path, options);
    return data;
};

export default httpRequest;
