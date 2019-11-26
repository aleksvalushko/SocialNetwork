import React, {useState} from 'react';
import mod from './Info.module.sass';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatarDownload from '../../../images/avatarDownload.svg';
import ProfileDataForm from "./ProfileDataForm";
import {reduxForm} from "redux-form";

const Info = ({profile, savePhoto, isOwner, status, updateStatus, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoChange = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    };

    return (
        <div className={mod.me}>
            <div className={mod.profileAvatar}>
                <img src={profile.photos.large} alt="alberto"/>
                {isOwner &&
                <label className={mod.profilePhotoLoadButton}>
                    <input type='file' onChange={onMainPhotoChange}/>
                    <img src={avatarDownload} alt="avatarDownload"/>
                </label>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            {editMode
                ? <ProfileDataReduxForm profile={profile} onSubmit={onSubmit} initialValue={profile}/>
                : <ProfileData profile={profile} activateEditMode={() => {setEditMode(true)}} isOwner={isOwner}/>
            }
        </div>
    );
};

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

const ProfileData = ({profile, activateEditMode, isOwner}) => {
    return <div className={mod.aboutMe}>
        <div className={mod.name}>{profile.fullName}</div>
        <div>
            <span>Looking for a job:</span> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <span>My professional skills:</span> {profile.lookingForAJobDescription}
        </div>}
        <div>
            <span>Contacts:</span> {Object.keys(profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
        <div>
            <span>About me:</span> {profile.aboutMe}
        </div>
        {isOwner && <button onClick={activateEditMode}>Edit</button>}
    </div>
};

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={mod.profileContacts}>{contactTitle}: {contactValue}</div>
};

export default Info;