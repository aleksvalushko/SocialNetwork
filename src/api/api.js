import axios from './../dal/axiosInstance';

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return axios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    deleteUsers(id){
        return axios.delete(`follow/${id}`)
            .then(response => response.data);
    },
    authMe(){
        return axios.get('auth/me')
            .then(response => response.data);
    },
    profile(userId){
        return axios.get(`profile/` + userId)
            .then(response => response.data)
    }
};