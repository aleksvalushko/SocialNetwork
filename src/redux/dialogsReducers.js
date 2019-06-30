const ADD_MESSAGE = 'SN/MESSAGES/ADD_MESSAGE';
export const addMessageAC = (messageText) => (
    {type: ADD_MESSAGE, text: messageText}
);
const UPDATE_MESSAGE = 'SN/MESSAGES/UPDATE_MESSAGE';
export const updateMessageAC = (newText) => (
    {type: UPDATE_MESSAGE, text: newText}
);

let initState = {
    members: ['Nastya', 'Aleks', 'Masha', 'Dima', 'Viktor', 'Elena', 'Olga', 'Tanya', 'Evgen', 'Valera', 'Kolya'],
    messages: [
        {
            message: 'lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
            name: 'Masha',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ'
        },
        {
            message: 'lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
            name: 'Me',
            avatar: "https://i.pinimg.com/236x/14/74/18/147418a1b8d0417edd5e700c09a33c29.jpg"
        }],
    newMessageText: ''
};

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: action.text,
                name: 'Masha',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ'
            };

            /*state.dialogs.messages.unshift(newMessage);
            state.newMessageText = '';*/
            return {...state, messages: [newMessage, ...state.messages], newMessageText: ''};
        case UPDATE_MESSAGE:
            // state.newMessageText = action.text;
            return {...state, newMessageText: action.text};
        default:
            return state;
    }
};

export default dialogsReducer;