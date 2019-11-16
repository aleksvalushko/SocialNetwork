import React from 'react';
import {reduxForm} from "redux-form";
import {maxLength30, required} from "../../helpers/Validators";
import {createFieldForm, Input} from "../Forms/FormsControl";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import mod from '../Forms/FormsControl.module.sass'

const LoginForm = ({handleSubmit, error}) => {
    return(
        <form onSubmit={handleSubmit}>
            {createFieldForm('Email', 'email', Input, [required, maxLength30])}
            {createFieldForm('Password', 'password', Input, [required, maxLength30], {type: 'password'})}
            {createFieldForm(null, 'rememberMe', 'input', null, {type: 'checkbox'}, 'remember me')}
            { error &&
                <div className={mod.formSummaryError}>
                    {error}
                </div>
            }
            <button>Login</button>
        </form>
    )
};

const Login = ({login, isAuth}) => {
    let onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    };

    if(isAuth){
        return <Redirect to='/Profile'/>
    }
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
