import React from 'react';
import mod from './Friends.module.sass';
import Friend from "./Friend/Friend";
import PropTypes from 'prop-types';

const Friends = ({users}) => {

    let friends = users.map( el => el.followed ? <Friend user={el} /> : '');

    return(
        <div className={mod.friends}>
            {friends}
        </div>
    );
};

export default Friends;