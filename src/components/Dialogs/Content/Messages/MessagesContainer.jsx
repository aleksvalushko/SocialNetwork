import React from 'react';
import PropTypes from 'prop-types';
import {addMessageAC, updateMessageAC} from "../../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from 'react-redux'

/*const MessagesContainer = ({dialogs, store}) => {

    let addNewMessage = () => {
        store.dispatch(addMessageAC());
    };

    let updateNewMessage = (text) => {
        let action = updateMessageAC(text);
        store.dispatch(action);
    };

    return (<Messages addNewMessage={addNewMessage} updateNewMessage={updateNewMessage}
                    messages={dialogs.messages} newMessageText={dialogs.newMessageText}/>);
};*/

const mapStateToProps = (state) => {
    return{
        messages: state.dialogs.messages,
        newMessageText: state.dialogs.newMessageText,
        isAuth: state.auth.isAuth
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        addNewMessage: () => {
            dispatch(addMessageAC());
        },
        updateNewMessage: (text) => {
            dispatch(updateMessageAC(text));
        }
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;

MessagesContainer.propTypes = {
    state: PropTypes.object
};