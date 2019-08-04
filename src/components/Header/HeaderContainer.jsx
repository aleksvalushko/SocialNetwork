import React from 'react';
import Header from "./Header";
import * as axios from "axios/index";
import {connect} from 'react-redux';
import {setAuthUserData} from "../../redux/authReducers";

class HeaderContainer extends React.Component {

    componentDidMount() {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
            headers: {
                'API-KEY': '2a70584b-20f7-4ff5-8c15-684fb9f4be7b'
            }
        })
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    alert('We are log in!)');
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData = {id, email, login};
                }
            });
    };

    render() {
        return <Header {...this.props}/>;
    }
};

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

};

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);