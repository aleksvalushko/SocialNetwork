import React from 'react';
import mod from './Info.module.sass';
import PropTypes from 'prop-types';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Info = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={mod.me}>
            <div className={mod.profileAvatar}>
                <img src={props.profile.photos.large} alt="alberto"/>
            </div>
            <div className={mod.name}>{props.profile.fullName}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            {/*<div className={mod.about}>
                <div className={mod.name}>{profile.fullName}</div>
                <div className={mod.informations}>
                    <div className={mod.information}>Date of birth: {profile.birthday}</div>
                    <div className={mod.information}>City: {profile.city}</div>
                    <div className={mod.information}>Education: {profile.education}</div>
                    <div className={mod.information}>Web Site: <a href="#">{profile.site}</a></div>
                </div>
            </div>*/}
        </div>
    );
};

export default Info;

Info.propTypes = {
    state: PropTypes.object
};