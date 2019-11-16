import React from 'react';
import mod from '../Users/Users.module.sass';
import userPhoto from '../../images/user.svg';
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onPagesChange, ...props}) => {

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPagesChange={onPagesChange}/>
            {
                props.users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                                           unfollow={props.unfollow} follow={props.follow}/>
                )
            }
        </div>
    )
};

export default Users;