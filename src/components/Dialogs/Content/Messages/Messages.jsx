import React from 'react';
import mod from './Messages.module.sass';
import Message from './Message/Message';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Messages = (props) => {

    let messages = props.messages;
    let message = messages.map((el, index) => <Message message={el} item={index}/>);

    let addNewMessage = (values) => {
        props.addNewMessage(values.newMessageText);
    };

    return (
        <div className={mod.messages}>
            {message}
            <MessageReduxForm onSubmit={addNewMessage} />
        </div>
    );
};

const MessagesForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='...your message' component='textarea' name='newMessageText' />
            {/*<textarea onChange={updateNewMessage} ref={newTextMessage} value={props.newMessageText}></textarea>*/}
            <button>Add</button>
        </form>
    )
};

const MessageReduxForm = reduxForm({
    form: 'newMessage'
})(MessagesForm);



export default Messages;