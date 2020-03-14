import React from 'react';
import mod from "./Info.module.sass";
import {createFieldForm, Input, Textarea} from "../../Forms/FormsControl";
import {required} from "../../../helpers/Validators";
import m from '../../Forms/FormsControl.module.sass';

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form className={mod.aboutMe} onSubmit={handleSubmit}>
        <button>Save</button>
        {error &&
        <div className={m.formSummaryError}>
            {error}
        </div>
        }
        <div className={mod.name}>
            {createFieldForm('Full name', 'fullName', Input, [required])}
        </div>
        <div>
            <span>Looking for a job:</span>
            {createFieldForm('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
        </div>
        <div>
            <span>My professional skills:</span>
            {createFieldForm('My professional skills', 'lookingForAJobDescription', Textarea, [required])}
        </div>
        <div>
            <span>Contacts:</span> {Object.keys(profile.contacts).map(key => {
            return <div>
                <span>{key}:</span> {createFieldForm(key, 'contacts.' + key, Input)}
            </div>
        })}
        </div>
        <div>
            <span>About me:</span>
            {createFieldForm('About me', 'aboutMe', Textarea, [required])}
        </div>
    </form>
};

export default ProfileDataForm