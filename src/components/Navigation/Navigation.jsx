import React from 'react';
import mod from './Navigation.module.sass';
import {NavLink, Route} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navigation = ({friends}) => {
    return(
        <nav className={mod.nav}>
            <div className={mod.item}><NavLink to = "/Profile" activeClassName={mod.active}>Profile</NavLink></div>
            <div className={mod.item}><NavLink to = "/Dialogs" activeClassName={mod.active}>Messages</NavLink></div>
            <div className={mod.item}>
                <NavLink to='/Friends' activeClassName={mod.active}>
                    <Route path='/Friends' render={() =>
                        <Friends friends={friends}/>}>Friends</Route></NavLink>
            </div>
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