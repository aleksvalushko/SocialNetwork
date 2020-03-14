import axios from './../dal/axiosInstance';

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return axios.get(`users?page=${currentPage}&count=${pageSize}`) //после вопросительного знака цепляются квери(get)-параметры
            .then(response => response.data);
    },
    unfollow(userId) {
        return axios.delete(`follow/${userId}`)
    },
    follow(userId) {
        return axios.post(`follow/${userId}`)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return axios.get(`profile/` + userId) //после / указываются УРИ(URI)-параметры
            .then(response => response.data)
    },
    getStatus(userId) {
        return axios.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status) {
        return axios.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
    saveProfilePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile);
        return axios.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    saveProfileData(profile) {
        return axios.put(`profile`, profile)
            .then(response => response.data)
    }
};

export const authAPI = {
    authMe() {
        return axios.get('auth/me')
            .then(response => response.data);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return axios.post('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout() {
        return axios.delete('auth/login')
            .then(response => response.data);
    }
};

export const securityAPI = {
    getCaptchaURL() {
        return axios.get('security/get-captcha-url')
            .then(response => response.data);
    }
};