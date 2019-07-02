import React from 'react';
import PropTypes from 'prop-types';
import Members from "./Members";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {

    return {
        members: state.dialogs.members
    }
};
const MembersContainer = connect(mapStateToProps)(Members);

export default MembersContainer;

Members.propTypes = {
    state: PropTypes.object
};