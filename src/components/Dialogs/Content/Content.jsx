import React from 'react';
import mod from './Content.module.sass';
import MessagesContainer from "./Messages/MessagesContainer";
import MembersContainer from "./Members/MembersContainer";

const Content = () => {

    return (
        <div className={mod.content}>
            <MembersContainer />
            <MessagesContainer />
        </div>
    );
};

export default Content;