import axios from './../dal/axiosInstance';

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return axios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow(userId){
        return axios.delete(`follow/${userId}`)
    },
    follow(userId){
        return axios.post(`follow/${userId}`)
    },
    profile(userId){
        return axios.get(`profile/` + userId)
            .then(response => response.data)
    }
};

export const authAPI = {
    authMe(){
        return axios.get('auth/me')
            .then(response => response.data);
    }
};