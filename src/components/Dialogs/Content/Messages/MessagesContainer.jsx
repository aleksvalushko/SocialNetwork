import React from 'react';
import {addMessageAC} from "../../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from 'react-redux'
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return{
        messages: state.dialogs.messages,
        newMessageText: state.dialogs.newMessageText,
        isAuth: state.auth.isAuth
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        addNewMessage: (newMessageText) => {
            dispatch(addMessageAC(newMessageText));
        }
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Messages);