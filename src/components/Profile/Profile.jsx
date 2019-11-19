import React from 'react';
import mod from './Profile.module.sass';
import NewPostContainer from "./NewPost/NewPostContainer";
import Info from "./Info/Info";

const Profile = (props) => {
    return(
        <div className={mod.profile}>
           {/* <div className={mod.image}>
                <img
                    src="https://nika-web.ru/images/uslugi/socseti.jpg" alt="image"/>
            </div>*/}
            <Info profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <NewPostContainer />
        </div>
    );
};

export default Profile;