import React from 'react';
import mod from './Info.module.sass';
import PropTypes from 'prop-types';

const Info = (props) => {
debugger
    return (
        <div className={mod.me}>
            <div className={mod.profileAvatar}>
                <img src={props.info.avatar} alt="alberto"/>
            </div>
            <div className={mod.about}>
                <div className={mod.name}>{props.info.name}</div>
                <div className={mod.informations}>
                    <div className={mod.information}>Date of birth: {props.info.birthday}</div>
                    <div className={mod.information}>City: {props.info.city}</div>
                    <div className={mod.information}>Education: {props.info.education}</div>
                    <div className={mod.information}>Web Site: <a href="#">{props.info.site}</a></div>
                </div>
            </div>
        </div>
    );
};

export default Info;

Info.propTypes = {
    state: PropTypes.object
};