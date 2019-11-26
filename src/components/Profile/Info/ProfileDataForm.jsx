import React from 'react';
import mod from "./Info.module.sass";
import {createFieldForm, Input, Textarea} from "../../Forms/FormsControl";

const ProfileDataForm = ({profile, handleSubmit}) => {
    return <form  className={mod.aboutMe} onSubmit={handleSubmit}>
        <button>Save</button>
        <div className={mod.name}>
            {createFieldForm('Full name', 'fullName', Input, [])}
        </div>
        <div>
            <span>Looking for a job:</span>
            {createFieldForm('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
        </div>
        <div>
            <span>My professional skills:</span>
            {createFieldForm('My professional skills', 'lookingForAJobDescription', Textarea)}
        </div>
        <div>
            <span>Contacts:</span> {Object.keys(profile.contacts).map(key => {
            return <div>
                {key}: {createFieldForm(key, 'contacts.' + key, Input)}
            </div>
        })}
        </div>
        <div>
            <span>About me:</span>
            {createFieldForm('About me', 'aboutMe', Textarea)}
        </div>
    </form>
};

export default ProfileDataForm