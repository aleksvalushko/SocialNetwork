import React from 'react';
import Post from './Post/Post';
import mod from './NewPost.module.sass';
import PropTypes from 'prop-types';

const NewPost = (props) => {

    let posts = props.posts;
    let post = posts.map(el => <Post post={el} likesCount={el}/>);

    let newPostText = React.createRef();

    let addNewPost = () => {
        props.addPost();
    };

    let updateNewPost = () => {
        let text = newPostText.current.value;
        props.updatePost(text);
    };

    /*let addNewPost = () => {
        props.addPost();
    };

    let updateNewPost = (e) => {
        let text = e.currentTarget.value;
        props.updatePost(text);
    };*/

    return (
        <div className={mod.myPosts}>
            <div className={mod.newPost}>
                <div className={mod.headline}>My Posts</div>
                <div className={mod.mainPost}>
                    <div className={mod.input}>
                        <textarea placeholder="your news..." onChange={updateNewPost}
                                  ref={newPostText} value={props.newTextPost}></textarea>
                    </div>
                    <div className={mod.button}>
                        <button className={mod.buttonSignature} onClick={addNewPost}>Add</button>
                    </div>
                </div>
            </div>
            {post}
        </div>
    );
};

export default NewPost;

NewPost.propsType = {
    state: PropTypes.object,
    addPost: PropTypes.func,
    updatePost: PropTypes.func
};