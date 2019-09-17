import React from 'react';
import Header from "./Header";
import axios from './../../dal/axiosInstance';
import {connect} from 'react-redux';
import {setAuthUserData} from "../../redux/authReducers";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        debugger
        usersAPI.authMe()
            .then(data => {
                debugger
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);