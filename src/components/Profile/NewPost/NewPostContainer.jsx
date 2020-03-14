import React from 'react';
import {addPost} from "../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from 'react-redux';

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