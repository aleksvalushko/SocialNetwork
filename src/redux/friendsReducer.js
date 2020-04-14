const SET_FRIEND = 'SN/FRIENDS/SET_FRIEND';
export const setFriends = (friends) => ({type: SET_FRIEND, friends});

let initState = {
    friends: []
};

const friendsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FRIEND:
            return {...state, friends: action.friends};
        default:
            return state;
    }
};

export default friendsReducer;