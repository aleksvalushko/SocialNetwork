import React from 'react';
import './Apps.sass';
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profie/ProfileContainer";
import Login from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {

    /*let profile = state.profile;
    let dialogs = state.dialogs;
    let friends = state.friends;
    let dispatch = store.dispatch;*/

    return (
        <div className="appWrapper">
            <HeaderContainer />
            <Navigation
                // friends={friends}
            />
            <div className="appWrapperContent">
                <Route path='/Login' render={() => <Login />}/>
                <Route path='/Profile/:userId?' render={() => <ProfileContainer
                    // store={store} profile={profile}
                />}/>
                <Route path='/Dialogs' render={() => <Dialogs
                    // store={store} dialogs={dialogs}
                />}/>
                <Route path='/Friends' render={() => <FriendsContainer
                    // friends={friends}
                />}/>
                <Route path='/Users' render={ () => <UsersContainer />} />
                <Route path='/News' render={() => <News />}/>
                <Route path='/Music' render={() => <Music />}/>
                <Route path='/Settings' render={() => <Settings />}/>
            </div>
        </div>
    );
};

export default App;

App.propTypes = {
};
