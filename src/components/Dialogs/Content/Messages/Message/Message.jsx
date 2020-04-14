import React from 'react';
import mod from './Message.module.sass';

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