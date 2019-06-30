const SET_FRIEND = 'SN/FRIENDS/SET_FRIEND';
export const setFriendsAC = friends => ({type: SET_FRIEND, friends});

let initState = {
    users: [
        {
            id: 1,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ',
            name: 'Ruslan'
        },
        {
            id: 2,
            avatar: "https://i.pinimg.com/236x/14/74/18/147418a1b8d0417edd5e700c09a33c29.jpg",
            name: 'Aleks'
        },
        {
            id: 3,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ',
            name: 'Dima'
        },
        {
            id: 4,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ',
            name: 'Ruslan'
        },
        {
            id: 5,
            avatar: "https://i.pinimg.com/236x/14/74/18/147418a1b8d0417edd5e700c09a33c29.jpg",
            name: 'Aleks'
        },
        {
            id: 6,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ',
            name: 'Dima'
        }
    ]
};

const friendsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FRIEND:
            return {...state, users: action.users};
        default:
            return state;
    }
};

export default friendsReducer;