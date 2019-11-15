import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_AUTH_USER_DATA = 'SN/HEADER/SET_AUTH_USER_DATA';
export const setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}}
);
// const SET_IS_AUTH = 'SN/AUTH/SET_IS_AUTH';
// export const setIsAuth = (value) => ({
//     type: SET_IS_AUTH, value
// });

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        /*case SET_IS_AUTH: {
            return {
                ...state,
                ...action.data,
                isAuth: action.value
            };
        }*/
        default: {
            return state;
        }
    }
};

export const getAuthMeData = () => (dispatch) => {
    return authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthMeData());
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}));
            }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};

export default authReducer;