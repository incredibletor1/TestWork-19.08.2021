import axios from 'axios';
import { types } from './UserActionsTypes'


// const JWTToken = localStorage.getItem(types.TOKEN);

export const userAxios = axios.create({
    baseURL: 'https://localhost:44307/User/'
});

// if (JWTToken) {
//     apiSetHeader('Authorization', `Bearer ${JWTToken}`);
// }

// axios.interceptors.request.use(config => {
//     if (localStorage.getItem(types.TOKEN) !== null)
//         return {
//             ...config,
//             headers: userAxios.defaults.headers
//         };
//     else {
//         return {
//             ...config
//         };
//     }
// }, error => {
//     return Promise.reject(error);
// });

// export function apiSetHeader(name, value) {
//     if (value) {
//         userAxios.defaults.headers[name] = value;
//     }
// }
