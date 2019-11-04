/*
import React from 'react';
import {connect} from 'react-redux';
import {login, statuses} from "../../redux/loginReducer";
import {Redirect} from "react-router-dom";


export const Login = ({status, login, message, isAuth, userId}) => {
    if(isAuth){
        return <Redirect to={`/Profile/${userId}`}/>
    }

    let loginRef = React.createRef(),
        passwordRef = React.createRef(),
        rememberMeRef = React.createRef();

    const onLoginClick = () => {

        let email =loginRef.current.value;
        let password =passwordRef.current.value;
        let rememberMe =rememberMeRef.current.checked;
        login(email, password, rememberMe) ; //?????
    };

    let errorMessage = status === statuses.ERROR && <div>{message}</div>;

    return <div>
        <div>Login</div>
        <div><input type='text' ref={loginRef} defaultValue='aleks.valushko@yandex.ru'/></div>
        <div><input type='password'  ref={passwordRef} defaultValue='aleks140393'/></div>
        <div><input type='checkbox' ref={rememberMeRef}/>Remember me</div>
        <div><button onClick={onLoginClick}>Login</button></div>
        {errorMessage}
    </div>
};

let mapStateToProps = (state) => {

  return {
      /!*userId: state.auth.userId,*!/
      isAuth: state.auth.isAuth,
      status: state.login.status,
      message: state.login.message,
      captchaUrl: state.login.captchaUrl
  };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         login: (log, password, rememberMe) => {
//             dispatch(login(log, password, rememberMe));
//         }
//     }
// };

export default connect(mapStateToProps, {login})(Login);*/

import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength20, maxLength30, required} from "../../helpers/Validators";
import {Input} from "../Forms/FormsControl";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import mod from '../Forms/FormsControl.module.sass'

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder='Email' name='email' component={Input}
                        validate={[required, maxLength30]} /></div>
            <div><Field placeholder='Password' name='password' component={Input} type='password'
                        validate={[required, maxLength20]} /></div>
            <div><Field type='checkbox' name='rememberMe' component='input' />remember me</div>
            { props.error &&
                <div className={mod.formSummaryError}>
                    {props.error}
                </div>
            }
            <button>Login</button>
        </form>
    )
};

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if(props.isAuth){
        return <Redirect to='/Profile'/>
    }
    debugger
    return(
        <div>
            <h1>Login</h1>
            <LoginReducerForm onSubmit={onSubmit}/>
        </div>
    )
};

const LoginReducerForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
