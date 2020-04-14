const ADD_MESSAGE = 'SN/MESSAGES/ADD_MESSAGE';
export const addMessageAC = (newMessageText) => (
    {type: ADD_MESSAGE, newMessageText}
);

let initState = {
    members: ['Nastya', 'Aleks', 'Masha', 'Dima', 'Viktor', 'Elena', 'Olga', 'Tanya', 'Evgen', 'Valera', 'Kolya'],
    messages: [
        {
            id: 1,
            message: 'lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
            name: 'Masha',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ'
        },
        {
            id: 2,
            message: 'lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
            name: 'Me',
            avatar: "https://i.pinimg.com/236x/14/74/18/147418a1b8d0417edd5e700c09a33c29.jpg"
        }]
};

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: action.newMessageText,
                name: 'Masha',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ'
            };
            return {...state, messages: [newMessage, ...state.messages]};
        default:
            return state;
    }
};

export default dialogsReducer;