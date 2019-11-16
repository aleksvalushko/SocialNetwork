import React from 'react';
import mod from './Header.module.sass';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {

    return(
        <header className={mod.header}>
            <img src='https://image.flaticon.com/icons/svg/254/254018.svg' alt="icon"/>
            {isAuth
                ? <div className={mod.loginLogout}><div>{login}</div><button onClick={logout}>Logout</button></div>
                : <div className={mod.login}><NavLink to = "/Login">Login</NavLink></div>}
        </header>
    );
};

export default Header;