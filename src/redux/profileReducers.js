const ADD_POST = 'SN/NEW_POST/ADD_POST';
export const addPostAC = (postText) => (
    {type: ADD_POST, text: postText}
);
const UPDATE_POST = 'SN/NEW_POST/UPDATE_POST';
export const updatePostAC = (newText) => (
    {type: UPDATE_POST, text: newText}
);

let initState = {
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
};

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                text: state.newTextPost,
                likes: 0
            };
            // state.profile.posts.unshift(newPost);
            // state.newTextPost = '';
            return {...state, posts: [newPost, ...state.posts], newTextPost: ''};
        case UPDATE_POST:
            // state.newTextPost = action.text;
            return {...state, newTextPost: action.text};
        default:
            return state;
    }
};

export default profileReducer;