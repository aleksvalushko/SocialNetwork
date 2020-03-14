import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'SN/PROFILE/NEW_POST/ADD_POST';
export const addPost = (newPostText) => (
    {type: ADD_POST, newPostText}
);

const SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE';
export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile}
);
const SET_STATUS = 'SN/PROFILE/SET_STATUS';
export const setStatus = (status) => (
    {type: SET_STATUS, status}
);
const DELETE_POST = 'SN/PROFILE/DELETE_POST';
export const deletePost = (postId) => (
    {type: DELETE_POST, postId}
);
const SAVE_PHOTO_SUCCESS = 'SN/PROFILE/SAVE_PHOTO_SUCCESS';
export const savePhotoSuccess = (photos) => (
    {type: SAVE_PHOTO_SUCCESS, photos}
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
            id: 1,
            text: 'Why you are so serious?',
            likes: 15
        },
        {
            id: 2,
            text: 'It is my first post!',
            likes: 9
        }],
    profile: null,
    status: ''
};

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                text: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}};
        default:
            return state;
    }
};

/*ThunkCreators*/
export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
};
export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};
export const savePhoto = (file) => async (dispatch) => {
    let data = await profileAPI.saveProfilePhoto(file);
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    let userId = getState().auth.userId;
    let data = await profileAPI.saveProfileData(profile);
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        //let contacts = data.messages[0].split('->');
        //let contact = contacts[1].split(')');
        //let cont = contact[0];
        // dispatch(stopSubmit('edit-profile', {'contacts': {cont: data.messages[0]}}));
        dispatch(stopSubmit('edit-profile', {'contacts': {'facebook': data.messages[0]} }));
        // {'contacts': {'facebook': data.messages[0]} }
        return Promise.reject(data.messages[0]);
    }
};



export default profileReducer;