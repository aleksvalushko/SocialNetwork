import React from 'react';
import mod from './Content.module.sass';
import Members from './Members/Members';
import Messages from './Messages/Messages';
import PropTypes from 'prop-types';
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

Content.propsTypes = {
    state: PropTypes.object
};