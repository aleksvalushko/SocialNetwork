import React from 'react';
import mod from './Friend.module.sass';
import {NavLink} from "react-router-dom";
import userPhoto from "../../../images/user.svg";

const Friend = ({user}) => {

    return (
        <div className={mod.friend}>
            <div className={mod.avatar}>
                <NavLink to={'Profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="Avatar"/>
                    <div className={mod.name}>{user.name}</div>
                </NavLink>
            </div>
        </div>
    );
};

export default Friend;