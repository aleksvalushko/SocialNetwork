import React from 'react';
import mod from './Messages.module.sass';
import Message from './Message/Message';
import PropTypes from 'prop-types';
import {addMessageAC, updateMessageAC} from "../../../../redux/dialogsReducers";

const Messages = ({dialogs, dispatch}) => {

    let messages = dialogs.messages;
    let message = messages.map((el, index) => <Message message={el} item={index}/>);

    let newTextMessage = React.createRef();

    let addNewMessage = () => {
        let message = newTextMessage.current.value;
        let action = addMessageAC(message);
        dispatch(action);
    };

    let updateNewMessage = () => {
        let text = newTextMessage.current.value;
        let action = updateMessageAC(text);
        dispatch(action);
    };

    return (
        <div className={mod.messages}>
            {message}
            <textarea onChange={updateNewMessage} ref={newTextMessage} value={dialogs.newMessageText}></textarea>
            <button onClick={addNewMessage}>Add</button>
        </div>
    );
};

export default Messages;

Messages.propTypes = {
    state: PropTypes.object
};