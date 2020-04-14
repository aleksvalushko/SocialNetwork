import React from 'react';
import mod from './Friends.module.sass';
import Friend from "./Friend/Friend";

const Friends = ({friends}) => {
    let myFriends = friends.map( el => <Friend user={el} key={el.id}/>);

    return(
        <div className={mod.friends}>
            {myFriends}
        </div>
    );
};

export default Friends;