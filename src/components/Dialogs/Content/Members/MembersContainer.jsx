import React from 'react';
import Members from "./Members";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {

    return {
        members: state.dialogs.members
    }
};
const MembersContainer = connect(mapStateToProps)(Members);

export default MembersContainer;