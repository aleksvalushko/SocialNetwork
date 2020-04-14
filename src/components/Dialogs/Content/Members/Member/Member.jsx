import React from 'react';
import mod from './Member.module.sass';
import {NavLink} from "react-router-dom";

const Member = (props) => {

    return (
        <div className={mod.item}>
            <NavLink to={"/Dialogs/" + props.item}>{props.name}</NavLink>
        </div>
    );
};

export default Member;