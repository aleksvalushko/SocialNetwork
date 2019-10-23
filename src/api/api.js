import axios from './../dal/axiosInstance';

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return axios.get(`users?page=${currentPage}&count=${pageSize}`) //после вопросительного знака цепляются квери(get)-параметры
            .then(response => response.data);
    },
    unfollow(userId){
        return axios.delete(`follow/${userId}`)
    },
    follow(userId){
        return axios.post(`follow/${userId}`)
    }/*,
    getProfile(userId){
        console.warn('Absolute method. Please, use profileAPI.');
        return profileAPI.getProfile(userId);
    }*/
};

export const profileAPI = {
    getProfile(userId){
        return axios.get(`profile/` + userId) //после / указываются УРИ(URI)-параметры
            .then(response => response.data)
    },
    getStatus(userId){
        return axios.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status){
        return axios.put(`profile/status/`, {status: status})
            .then(response => response.data)
    },
};

export const authAPI = {
    authMe(){
        return axios.get('auth/me')
            .then(response => response.data);
    }
};