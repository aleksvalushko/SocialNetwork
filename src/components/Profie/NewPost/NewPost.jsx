import React from 'react';
import Post from './Post/Post';
import mod from './NewPost.module.sass';
import PropTypes from 'prop-types';
import {Field, reduxForm} from "redux-form";
import {maxLength30, required} from "../../../helpers/Validators";
import {Textarea} from "../../Forms/FormsControl";

const NewPost = React.memo((props) => {

    let posts = props.posts;
    let post = posts.map(el => <Post post={el} likesCount={el}/>);

    let addNewPost = (values) => {
        props.addNewPost(values.newPostText);
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
                    <AddPostReduxForm onSubmit={addNewPost} />
                </div>
            </div>
            {post}
        </div>
    );
});

const AddPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={mod.input}>
                <Field placeholder="your news..." component={Textarea} name='newPostText'
                validate={[required, maxLength30]}/>
                {/*<textarea placeholder="your news..." onChange={updateNewPost}
                                  ref={newPostText} value={props.newTextPost}></textarea>*/}
            </div>
            <div className={mod.button}>
                <button className={mod.buttonSignature}>Add</button>
            </div>
        </form>
    )
};

const AddPostReduxForm = reduxForm({
  form: 'newPost'
})(AddPostForm);

export default NewPost;

NewPost.propsType = {
    state: PropTypes.object,
    addPost: PropTypes.func,
    updatePost: PropTypes.func
};