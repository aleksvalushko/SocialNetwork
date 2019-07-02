import React from 'react';
import mod from './Profile.module.sass';
import PropTypes from 'prop-types';
import NewPostContainer from "./NewPost/NewPostContainer";
import InfoContainer from "./Info/InfoContainer";

const Profile = () => {

    return(
        <div className={mod.profile}>
            <div className={mod.image}>
                <img
                    src="https://nika-web.ru/images/uslugi/socseti.jpg" alt="image"/>
            </div>
            <InfoContainer />
            <NewPostContainer />
        </div>
    );
};

export default Profile;

Profile.propTypes = {
};