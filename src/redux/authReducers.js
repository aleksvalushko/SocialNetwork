const SET_AUTH_USER_DATA = 'SN/HEADER/SET_AUTH_USER_DATA';
export const setAuthUserData = (userId, email, login) => (
    {type: SET_AUTH_USER_DATA, data: {userId, email, login}}
);
const SET_IS_AUTH = 'SN/AUTH/SET_IS_AUTH';
export const setIsAuth = (value) => ({
    type: SET_IS_AUTH, value
});

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:{
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        case SET_IS_AUTH:{
            return {
                ...state,
                ...action.data,
                isAuth: action.value
            };
        }
        default: {
            return state;
        }
    }
};

export default authReducer;