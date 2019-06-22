import React from 'react';
import mod from './Profile.module.css';
import NewPost from './NewPost/NewPost';
import Info from './Info/Info';
import PropTypes from 'prop-types';

const Profile = ({profile, dispatch}) => {
    return(
        <div className={mod.profile}>
            <div className={mod.image}>
                <img
                    src="https://nika-web.ru/images/uslugi/socseti.jpg" alt="image"/>
            </div>
            <Info profile={profile} />
            <NewPost profile={profile} dispatch={dispatch}/>
        </div>
    );
};

export default Profile;

Profile.propTypes = {
  state: PropTypes.object
};