import React from 'react';
import mod from './Info.module.sass';
import PropTypes from 'prop-types';

const Info = ({profile}) => {

    return (
        <div className={mod.me}>
            <div className={mod.profileAvatar}>
                <img src={profile.avatar} alt="alberto"/>
            </div>
            <div className={mod.about}>
                <div className={mod.name}>{profile.name}</div>
                <div className={mod.informations}>
                    <div className={mod.information}>Date of birth: {profile.birthday}</div>
                    <div className={mod.information}>City: {profile.city}</div>
                    <div className={mod.information}>Education: {profile.education}</div>
                    <div className={mod.information}>Web Site: <a href="#">{profile.site}</a></div>
                </div>
            </div>
        </div>
    );
}

export default Info;

Info.propTypes = {
    state: PropTypes.object
};