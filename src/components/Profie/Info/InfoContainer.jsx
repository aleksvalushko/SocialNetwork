import React from 'react';
import PropTypes from 'prop-types';
import Info from "./Info";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {

    return {
        info: state.profile
    }
};

const InfoContainer = connect(mapStateToProps)(Info);

export default InfoContainer;

Info.propTypes = {
    state: PropTypes.object
};