import React from 'react';
import mod from './Info.module.sass';
import PropTypes from 'prop-types';
import Preloader from "../../../common/Preloader/Preloader";

const Info = ({profile}) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className={mod.me}>
            <div className={mod.profileAvatar}>
                <img src={profile.photos.large} alt="alberto"/>
            </div>
            <div className={mod.about}>
                <div className={mod.name}>{profile.fullName}</div>
                <div className={mod.informations}>
                    <div className={mod.information}>Date of birth: {profile.birthday}</div>
                    <div className={mod.information}>City: {profile.city}</div>
                    <div className={mod.information}>Education: {profile.education}</div>
                    <div className={mod.information}>Web Site: <a href="#">{profile.site}</a></div>
                </div>
            </div>
        </div>
    );
};

export default Info;

Info.propTypes = {
    state: PropTypes.object
};