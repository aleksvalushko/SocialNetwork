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
      /*userId: state.auth.userId,*/
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

export default connect(mapStateToProps, {login})(Login);