import React from 'react';
import mod from './Content.module.sass';
import Members from './Members/Members';
import Messages from './Messages/Messages';
import PropTypes from 'prop-types';

const Content = ({dialogs, dispatch}) => {
    return (
        <div className={mod.content}>
            <Members dialogs={dialogs}/>
            <Messages dialogs={dialogs} dispatch={dispatch} />
        </div>
    );
};

export default Content;

Content.propsTypes = {
    state: PropTypes.object
};