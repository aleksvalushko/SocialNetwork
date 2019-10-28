const SET_LOGIN_STATUS = 'SN/LOGIN/SET_LOGIN_STATUS';
const setLoginStatus = (status) => (
    {type: SET_LOGIN_STATUS, status}
);

const SET_LOGIN_MESSAGE = 'SN/LOGIN/SET_LOGIN_MESSAGE';
const setLoginMessage = (message) => (
    {type: SET_LOGIN_MESSAGE, message}
);

export const statuses = {
    INIT: 'INIT',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    MESSAGE: 'MESSAGE',
    CAPTCHAREQUIRE: 'CAPTCHAREQUIRE'
};

const initState = {
    status: statuses.INIT,
    message: ''
};

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOGIN_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_LOGIN_MESSAGE: {
            return {
                ...state,
                message: action.message
            }
        }
        default: {
            return state
        }
    }
};

