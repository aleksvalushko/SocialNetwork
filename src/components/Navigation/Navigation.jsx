import React from 'react';
import mod from './Navigation.module.sass';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <nav className={mod.nav}>
            <div className={mod.item}><NavLink to = "/Profile" activeClassName={mod.active}>Profile</NavLink></div>
            <div className={mod.item}><NavLink to = "/Dialogs" activeClassName={mod.active}>Messages</NavLink></div>
            <div className={mod.item}><NavLink to = "/Friends" activeClassName={mod.active}>Friends</NavLink></div>
            <div className={mod.item}><NavLink to="/Users" activeClassName={mod.active}>Users</NavLink></div>
            <div className={mod.item}><NavLink to = "/News" activeClassName={mod.active}>News</NavLink></div>
            <div className={mod.item}><NavLink to = "/Music" activeClassName={mod.active}>Music</NavLink></div>
            <div className={`${mod.item} ${mod.settings}`}>
                <NavLink to = "/Settings" activeClassName={mod.active}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;