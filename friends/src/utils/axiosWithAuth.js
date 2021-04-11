import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('loginToken');
    return axios.create({
        headers: {
            Authorization: token
        }
    })
}