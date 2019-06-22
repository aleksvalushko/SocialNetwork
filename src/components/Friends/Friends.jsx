import React from 'react';
import mod from './Friends.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import PropTypes from 'prop-types';

const Friends = (props) => {

    let friends = props.state.friends;
    let friend = friends.map( (el,index) => <Friend avatar={el.avatar} name={el.name} index={index+1}/>);

    return(
        <div className={mod.friends}>
            {friend}
        </div>
    );
};

export default Friends;

Friends.propTypes = {
  state: PropTypes.object
};