import React from 'react';
import mod from './Header.module.sass';

const Header = () => {
    return(
        <header className={mod.header}>
            <img src='https://image.flaticon.com/icons/svg/254/254018.svg' alt="icon"/>
        </header>
    );
};


export default Header;