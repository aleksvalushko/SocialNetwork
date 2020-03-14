import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_AUTH_USER_DATA = 'SN/AUTH/SET_AUTH_USER_DATA';
export const setAuthUserData = (userId, email, login, isAuth) => (
    {type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}}
);

const GET_CAPTCHA_URL_SUCCESS = 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS';
export const getCaptchaUrlSuccess = (captchaUrl) => (
    {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}}
);

const CAPTCHA_ZEROING = 'SN/AUTH/CAPTCHA_ZEROING';
export const setCaptchaZeroing = () => (
    {type: CAPTCHA_ZEROING}
);

let initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            {
            return {
                ...state,
                ...action.payload
            };
        }
        case CAPTCHA_ZEROING:
            {
            return {
                ...state,
                captchaUrl: null
            };
        }
        default: {
            return state;
        }
    }
};

export const getAuthMeData = () => async (dispatch) => {
    let data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
        dispatch(setCaptchaZeroing());
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getAuthMeData());
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptchaURL();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;