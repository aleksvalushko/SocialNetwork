import React from 'react';
import mod from './Friend.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const Friend = (props) => {

    return (
        <div className={mod.friend}>
            <div className={mod.avatar}>
                <NavLink to={'/Friends/' + props.index}>
                    <img src={props.avatar} alt="avatar"/>
                    <div className={mod.name}>{props.name}</div>
                </NavLink>
            </div>
        </div>
    );
};

export default Friend;

Friend.propTypes = {
    index: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string
};