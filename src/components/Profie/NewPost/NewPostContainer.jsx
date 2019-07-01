import React from 'react';
import {addPostAC, updatePostAC} from "../../../redux/profileReducers";
import NewPost from "./NewPost";

const NewPostContainer = ({profile, store}) => {

    let addNewPost = () => {
        store.dispatch(addPostAC());
    };

    let updateNewPost = (text) => {
        let action = updatePostAC(text);
        store.dispatch(action);
    };

    return <NewPost addPost={addNewPost} updatePost={updateNewPost}
                    posts={profile.posts} newTextPost={ profile.newTextPost}/>
};

export default NewPostContainer;