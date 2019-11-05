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

export const initializingApp = () => (dispatch) => {
    let promise = dispatch(getAuthMeData());
    Promise.all([promise]).then(() => {
        dispatch(successInitializing());
    })
};

export default appReducer;