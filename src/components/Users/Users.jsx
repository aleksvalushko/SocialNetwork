import React from 'react';
import Paginator from "./Paginator";
import User from "./User";

let Users = ({totalItemsCount, pageSize, currentPage, onPagesChange, ...props}) => {

    return (
        <div>
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize}
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