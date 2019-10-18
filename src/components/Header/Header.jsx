import React from 'react';
import mod from './Header.module.sass';
import {NavLink} from "react-router-dom";
/*import logo from '../../images/logoMSN2.png';*/

const Header = ({isAuth, login}) => {

    return(
        <header className={mod.header}>
            <img src='https://image.flaticon.com/icons/svg/254/254018.svg' alt="icon"/>
            {isAuth ? login : <div className={mod.login}><NavLink to = "/Login">Login</NavLink></div>}
        </header>
    );
};

export default Header;