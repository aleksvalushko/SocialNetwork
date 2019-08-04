import axios from './../dal/axiosInstance';
import {setIsAuth} from "./authReducers";

const SET_STATUS = 'SN/LOGIN/STATUS';
export const setStatus = (status) => (
    {type: SET_STATUS, status}
);
const SET_MESSAGE = 'SN/LOGIN/MESSAGE';
export const setMessage = (message) => (
    {type: SET_MESSAGE, message}
);

export const statuses = {
    INIT: 'INIT',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    CAPTCHAREQUIRE: 'CAPTHCAREQUIRE',
    SUCCESS: 'SUCCESS',
    MESSAGE: 'MESSAGE'
};

const initState = {
    status: statuses.INIT,
    message: ''
};



const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_MESSAGE: {
            return {
                ...state,
                message: action.message
            }
        }
        default: {
            return state;
        }
    }
};

export const login = (email, password, rememberMe, captcha) => (dispatch) => {

    dispatch(setStatus(statuses.INPROGRESS));

    axios.post('auth/login', {
        email,
        password,
        rememberMe
    }).then(result => {
        if (result.data.resultCode === 0) {
            dispatch(setStatus(statuses.SUCCESS));
            dispatch(setIsAuth(true));
        } else {
            dispatch(setStatus(statuses.ERROR));
            dispatch(setMessage(result.data.messages[0]))
        }
    });
};

export default loginReducer;