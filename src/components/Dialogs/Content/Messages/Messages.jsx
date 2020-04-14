import React from 'react';
import mod from './Messages.module.sass';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {maxLength50, required} from "../../../../helpers/Validators";
import {Textarea} from "../../../Forms/FormsControl";

const Messages = (props) => {

    let messages = props.messages;
    let message = messages.map((el, index) => <Message message={el} item={index} key={el.id}/>);

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
            <Field placeholder='...your message' component={Textarea} name='newMessageText'
                   validate={[required, maxLength50]}/>
            <button>Add</button>
        </form>
    )
};

const MessageReduxForm = reduxForm({
    form: 'newMessage'
})(MessagesForm);



export default Messages;