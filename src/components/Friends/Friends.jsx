import React from 'react';
import mod from './Friends.module.sass';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import PropTypes from 'prop-types';

const Friends = ({friends}) => {

    let friend = friends.users.map( (el,index) => <Friend avatar={el.avatar} name={el.name} index={index+1}/>);

    return(
        <div className={mod.friends}>
            {friend}
        </div>
    );
};

export default Friends;

Friends.propTypes = {
};