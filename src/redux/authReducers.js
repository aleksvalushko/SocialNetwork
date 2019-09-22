import {authAPI} from "../api/api";

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
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        case SET_IS_AUTH: {
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

export const headerAuthMe = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    };
}

/*export const headerAuthMe = (dispatch) => {
    return usersAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
};*/

export default authReducer;