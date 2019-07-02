import React from 'react';
import mod from './Friends.module.sass';
import Friend from "./Friend/Friend";
import PropTypes from 'prop-types';

const Friends = (props) => {

    let friend = props.friends.users.map( (el,index) => <Friend avatar={el.avatar} name={el.name} index={index+1}/>);

    return(
        <div className={mod.friends}>
            {friend}
        </div>
    );
};

export default Friends;

Friends.propTypes = {
};