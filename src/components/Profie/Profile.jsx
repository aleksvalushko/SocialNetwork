import React from 'react';
import mod from './Profile.module.sass';
import Info from './Info/Info';
import PropTypes from 'prop-types';
import NewPostContainer from "./NewPost/NewPostContainer";

const Profile = ({store, profile}) => {

    return(
        <div className={mod.profile}>
            <div className={mod.image}>
                <img
                    src="https://nika-web.ru/images/uslugi/socseti.jpg" alt="image"/>
            </div>
            <Info profile={profile} />
            <NewPostContainer store={store} profile={profile}/>
        </div>
    );
};

export default Profile;

Profile.propTypes = {
};