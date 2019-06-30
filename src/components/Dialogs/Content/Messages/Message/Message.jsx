import React from 'react';
import mod from './Message.module.sass';
import PropTypes from 'prop-types';

const Message = (props) => {

    return (
        <div className={mod.message}>
            <div className={mod.avatar}>
                <img
                    src={props.message.avatar} alt="messageAvatar"/>
            </div>
            <div className={mod.name}>{props.message.name}</div>
            <div className={mod.text}>{props.message.message}</div>
        </div>
    );
};

export default Message;

Message.propTypes = {
    item: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    message: PropTypes.object
};