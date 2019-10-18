import React from 'react';
import mod from './Messages.module.sass';
import Message from './Message/Message';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";

const Messages = (props) => {

    let messages = props.messages;
    let message = messages.map((el, index) => <Message message={el} item={index}/>);

    let newTextMessage = React.createRef();

    let addNewMessage = () => {

        props.addNewMessage();
    };

    let updateNewMessage = () => {
        let text = newTextMessage.current.value;
        props.updateNewMessage(text);
    };

    return (
        <div className={mod.messages}>
            {message}
            <textarea onChange={updateNewMessage} ref={newTextMessage} value={props.newMessageText}></textarea>
            <button onClick={addNewMessage}>Add</button>
        </div>
    );
};



export default Messages;

Messages.propTypes = {
    state: PropTypes.object
};