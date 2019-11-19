import React from 'react';
import {addPost} from "../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from 'react-redux';

/*const NewPostContainer = () => {

    let addNewPost = () => {
        store.dispatch(addPostAC());
    };

    let updateNewPost = (text) => {
        let action = updatePostAC(text);
        store.dispatch(action);
    };

    return <NewPost addPost={addNewPost} updatePost={updateNewPost}
                    posts={profile.posts} newTextPost={ profile.newTextPost}/>
};*/

const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newTextPost: state.profile.newTextPost
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPostText) => {
            dispatch(addPost(newPostText));
        }
    }
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;