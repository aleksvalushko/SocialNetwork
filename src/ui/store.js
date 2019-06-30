import profileReducer from "../redux/profileReducers";

let store = {
    _state: {
        profile: profileReducer(undefined,)
    }
};
/*const ADD_POST = 'ADD_POST';
export const addPostAC = (postText) => (
    {type: ADD_POST, text: postText}
);
const UPDATE_POST = 'SN/NEW_POST/UPDATE_POST';
export const updatePostAC = (newText) => (
    {type: UPDATE_POST, text: newText}
);
const ADD_MESSAGE = 'SN/MESSAGES/ADD_MESSAGE';
export const addMessageAC = (messageText) => (
    {type: ADD_MESSAGE, text: messageText}
);
const UPDATE_MESSAGE = 'SN/MESSAGES/UPDATE_MESSAGE';
export const updateMessageAC = (newText) => (
    {type: UPDATE_MESSAGE, text: newText}
);

const store = {
    _state: {
        dialogs: {
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
        },
        profile: {
            avatar: "https://i.pinimg.com/236x/14/74/18/147418a1b8d0417edd5e700c09a33c29.jpg",
            name: "Alberto",
            birthday: "1 January",
            city: "Minsk",
            education: "BSUIR",
            site: "https://myReactSite.com",
            posts: [
                {
                    text: 'Why you are so serious?',
                    likes: 15
                },
                {
                    text: 'It is my first post!',
                    likes: 9
                }],
            newTextPost: ''
        },
        friends: [
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
    },
    _callSubscriber(){},
    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        switch(action.type){
            case ADD_POST:
                let newPost = {
                    text: action.text,
                    likes: 0
                };
                this._state.profile.posts.unshift(newPost);
                this._state.profile.newTextPost = '';
                this._callSubscriber();
                break;
            case UPDATE_POST:
                this._state.profile.newTextPost = action.text;
                this._callSubscriber();
                break;
            case ADD_MESSAGE:
                let newMessage = {
                    message: action.text,
                    name: 'Masha',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ'
                };

                this._state.dialogs.messages.unshift(newMessage);
                this._state.dialogs.newMessageText = '';
                this._callSubscriber();
                break;
            case UPDATE_MESSAGE:
                this._state.dialogs.newMessageText = action.text;
                this._callSubscriber();
            default:
                break;
        }
    }*/
/*addPost(){
    let newPost = {
        text: state.profile.newTextPost,
        likes: 0
    };
    this._state.profile.posts.unshift(newPost);
    this._state.profile.newTextPost = '';
    this._rerenderWholeTree(state);
},
updatePost(newText){
    this._state.profile.newTextPost = newText;
    this._rerenderWholeTree(state);
},
addMessage () {
    let newMessage = {
        message: state.dialogs.newMessageText,
        name: 'Masha',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ'
    };
    this._state.dialogs.messages.unshift(newMessage);
    this._state.dialogs.newMessageText = '';
    this._rerenderWholeTree(state);
},
updateMessage (newText) {
    this._state.dialogs.newMessageText = newText;
    this._rerenderWholeTree(state);
}
};*/

export default store;