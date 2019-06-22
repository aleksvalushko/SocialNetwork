import React from 'react';
import mod from './Post.module.css';

const Post = (props) => {
    return (
        <div className={mod.post}>
            <div className={mod.postAvatar}><img
                src="https://i.pinimg.com/236x/14/74/18/147418a1b8d0417edd5e700c09a33c29.jpg"
                alt="avatar"/></div>
            <div className={mod.postText}>{props.post.text}</div>
            <button className={mod.like}>like <span>{props.likesCount.likes}</span></button>
        </div>);
}

export default Post;