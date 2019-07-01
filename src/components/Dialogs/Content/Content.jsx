import React from 'react';
import mod from './Content.module.sass';
import Members from './Members/Members';
import Messages from './Messages/Messages';
import PropTypes from 'prop-types';
import MessagesContainer from "./Messages/MessagesContainer";

const Content = ({store, dialogs}) => {
    return (
        <div className={mod.content}>
            <Members dialogs={dialogs}/>
            <MessagesContainer store={store} dialogs={dialogs} />
        </div>
    );
};

export default Content;

Content.propsTypes = {
    state: PropTypes.object
};