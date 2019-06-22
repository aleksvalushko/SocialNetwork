import React from 'react';
import mod from './Member.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const Member = (props) => {

    return (
        <div className={mod.item}>
            <NavLink to={"/Dialogs/" + props.item}>{props.name}</NavLink>
        </div>
    );
};

export default Member;

Member.propTypes = {
    item: PropTypes.number,
    name: PropTypes.string
};