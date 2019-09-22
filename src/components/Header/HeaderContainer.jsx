import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {headerAuthMe} from "../../redux/authReducers";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.headerAuthMe();
    };

    render() {
        return <Header {...this.props}/>;
    }
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

};

export default connect(mapStateToProps, {headerAuthMe})(HeaderContainer);