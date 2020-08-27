import axios from 'axios';

export const axiosWithAuth = () => {
    const token = sessionStorage.getItem('token');
    return axios.create({
        baseURL: 'https://anywhere-fitness-1.herokuapp.com/api',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}