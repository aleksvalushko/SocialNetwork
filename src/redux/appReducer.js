import {getAuthMeData} from "./authReducer";

const SUCCESS_INITIALIZING = 'SN/APP/SUCCESS_INITIALIZING';
export const successInitializing = () => ({type: SUCCESS_INITIALIZING});

let initState = {
    initialized: false
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case SUCCESS_INITIALIZING: {
            return {
                ...state,
                initialized: true
            };
        }
        default: {
            return state;
        }
    }
};

export const initializingApp = () => async (dispatch) => {
    let promise = dispatch(getAuthMeData());
    await Promise.all([promise]);
    dispatch(successInitializing());
};

export default appReducer;