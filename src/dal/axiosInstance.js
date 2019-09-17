import * as axiosLib from "axios";

const axios = axiosLib.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2a70584b-20f7-4ff5-8c15-684fb9f4be7b'
    }
});

export default axios;