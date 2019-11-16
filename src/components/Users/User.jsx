import React from 'react';
import mod from '../Users/Users.module.sass';
import userPhoto from '../../images/user.svg';
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div className={mod.user}>
            <div className={mod.userBlock1}>
                <div className={mod.photo}>
                    <NavLink to={'Profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="Avatar"/>
                    </NavLink>
                </div>
                <div className={mod.followButton}>
                    {(user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id)
                                }}>Unfollow</button> :
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>)}
                </div>
            </div>
            <div className={mod.userBlock2}>
                <div className={mod.description}>
                    <div className={mod.name}>{user.name}</div>
                    <div
                        className={mod.status}>{user.status != null ? user.status : 'I have not status yet :('}</div>
                </div>
                <div className={mod.location}>
                    <div className={mod.city}>{'user.location.city'}</div>
                    <div className={mod.country}>{'user.location.country'}</div>
                </div>
            </div>
        </div>
    )
};

export default User;