import React from 'react';
import {reduxForm} from "redux-form";
import {maxLength30, required} from "../../helpers/Validators";
import {createFieldForm, Input} from "../Forms/FormsControl";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import modForm from '../Forms/FormsControl.module.sass';
import mod from './Login.module.sass'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return(
        <form onSubmit={handleSubmit}>
            {createFieldForm('Email', 'email', Input, [required, maxLength30])}
            {createFieldForm('Password', 'password', Input, [required, maxLength30], {type: 'password'})}
            {createFieldForm(null, 'rememberMe', 'input', null, {type: 'checkbox'}, 'remember me')}
            {captchaUrl && <img src={captchaUrl} alt="captchaUrl"/>}
            {captchaUrl && createFieldForm('Enter security captcha', 'captchaUrl', Input, [required])}
            { error &&
                <div className={modForm.formSummaryError}>
                    {error}
                </div>
            }
            <button>Login</button>
            <div className={mod.testData}>
                Тестовые e-mail и password:
                <div>E-mail: <span>free@samuraijs.com</span></div>
                <div>Password: <span>free</span></div>
            </div>
        </form>
    )
};

const Login = ({login, isAuth, captchaUrl}) => {
    let onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl);
    };

    if(isAuth){
        return <Redirect to='/Profile'/>
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReducerForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
};

const LoginReducerForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) =>({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
