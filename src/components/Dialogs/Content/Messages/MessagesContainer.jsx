import React from 'react';
import mod from './Messages.module.sass';
import Message from './Message/Message';
import PropTypes from 'prop-types';
import {addMessageAC, updateMessageAC} from "../../../../redux/dialogsReducers";
import Dialogs from "../../Dialogs";
import Messages from "./Messages";

const MessagesContainer = ({dialogs, store}) => {

    let addNewMessage = () => {
        store.dispatch(addMessageAC());
    };

    let updateNewMessage = (text) => {
        let action = updateMessageAC(text);
        store.dispatch(action);
    };

    return (<Messages addNewMessage={addNewMessage} updateNewMessage={updateNewMessage}
                    messages={dialogs.messages} newMessageText={dialogs.newMessageText}/>);
};

export default MessagesContainer;

MessagesContainer.propTypes = {
    state: PropTypes.object
};