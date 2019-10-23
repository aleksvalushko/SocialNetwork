import {profileAPI} from "../api/api";

const ADD_POST = 'SN/PROFILE/NEW_POST/ADD_POST';
export const addPostAC = (postText) => (
    {type: ADD_POST, text: postText}
);

const UPDATE_POST = 'SN/PROFILE/NEW_POST/UPDATE_POST';
export const updatePostAC = (newText) => (
    {type: UPDATE_POST, text: newText}
);

const SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE';
export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile}
);
const SET_STATUS = 'SN/PROFILE/SET_STATUS';
export const setStatus = (status) => (
    {type: SET_STATUS, status}
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
    newTextPost: '',
    profile: null,
    status: ''
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
            return {
                ...state,
                posts: [newPost, ...state.posts], newTextPost: ''
            };
        case UPDATE_POST:
            // state.newTextPost = action.text;
            return {...state, newTextPost: action.text};
        case SET_USER_PROFILE:
            // state.newTextPost = action.text;
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
};

/*ThunkCreator*/
export const setProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};

export default profileReducer;