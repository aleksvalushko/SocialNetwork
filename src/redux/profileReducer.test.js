import React from 'react';
import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
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
        }]
};

it('new post have to be added', () => {
    let action = addPost('hello');

    let newPost = profileReducer(state, action);

    expect(newPost.posts.length).toBe(3);
});

it('post must be deleted', () => {
    let action = deletePost(1);

    let newPost = profileReducer(state, action);

    expect(newPost.posts.length).toBe(1);
});
