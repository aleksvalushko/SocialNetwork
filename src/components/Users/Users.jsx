import React from 'react';
import mod from '../Users/Users.module.sass';
import userPhoto from '../../images/user.svg';
import {NavLink} from "react-router-dom";
import axios from './../../dal/axiosInstance';
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={mod.pageBlock}>{pages.map(p => {
                return <div className={`${props.currentPage === p && mod.selectedPage} ${mod.page}`}
                            onClick={(e) => {
                                props.onPagesChange(p)
                            }}>{p}</div>
            })}</div>
            {
                props.users.map(u =>
                    <div key={u.id} className={mod.user}>
                        <div className={mod.userBlock1}>
                            <div className={mod.photo}>
                                <NavLink to={'Profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="Avatar"/>
                                </NavLink>
                            </div>
                            <div className={mod.followButton}>
                                {(u.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => { props.unfollow(u.id)
                                        /*props.toggleFollowingInProgress(true, u.id);
                                        usersAPI.unfollow(u.id)
                                            .then(response => {
                                                if(response.data.resultCode === 0){
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFollowingInProgress(false, u.id);
                                            });*/
                                    }}>Unfollow</button> :
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => { props.follow(u.id)
                                        /*props.toggleFollowingInProgress(true, u.id);
                                        usersAPI.follow(u.id)
                                            .then(response => {
                                                if(response.data.resultCode === 0){
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingInProgress(false, u.id);
                                            });*/
                                    }}>Follow</button>)}
                            </div>
                        </div>
                        <div className={mod.userBlock2}>
                            <div className={mod.description}>
                                <div className={mod.name}>{u.name}</div>
                                <div
                                    className={mod.status}>{u.status != null ? u.status : 'I have not status yet :('}</div>
                            </div>
                            <div className={mod.location}>
                                <div className={mod.city}>{'u.location.city'}</div>
                                <div className={mod.country}>{'u.location.country'}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default Users;