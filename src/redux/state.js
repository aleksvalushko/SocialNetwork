let rerenderWholeTree = () => {

} ;

let state = {
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
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ',
            name: 'Ruslan'
        },
        {
            avatar: "https://i.pinimg.com/236x/14/74/18/147418a1b8d0417edd5e700c09a33c29.jpg",
            name: 'Aleks'
        },
        {
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ',
            name: 'Dima'
        },
        {
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ',
            name: 'Ruslan'
        },
        {
            avatar: "https://i.pinimg.com/236x/14/74/18/147418a1b8d0417edd5e700c09a33c29.jpg",
            name: 'Aleks'
        },
        {
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ',
            name: 'Dima'
        }
    ]
};

export const addPost = () => {
    let newPost = {
        text: state.profile.newTextPost,
        likes: 0
    };
    state.profile.posts.unshift(newPost);
    state.profile.newTextPost = '';
    rerenderWholeTree(state);
};

export const updatePost = (newText) => {
    state.profile.newTextPost = newText;
    rerenderWholeTree(state);
};

export const addMessage = () => {
    let newMessage = {
        message: state.dialogs.newMessageText,
        name: 'Masha',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ'
    };
    state.dialogs.messages.unshift(newMessage);
    state.dialogs.newMessageText = '';
    rerenderWholeTree(state);
};

export const updateMessage = (newText) => {
  state.dialogs.newMessageText = newText;
  rerenderWholeTree(state);
};

export const subscribe = (observer) => {
  rerenderWholeTree = observer;
};

export default state;