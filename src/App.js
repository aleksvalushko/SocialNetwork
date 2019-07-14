import React from 'react';
import './Apps.sass';
import Header from './components/Header/Header';
import Navigation from "./components/Navigation/Navigation";
import Profile from './components/Profie/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import PropTypes from 'prop-types';
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {

    /*let profile = state.profile;
    let dialogs = state.dialogs;
    let friends = state.friends;
    let dispatch = store.dispatch;*/

    return (
        <div className="appWrapper">
            <Header/>
            <Navigation
                // friends={friends}
            />
            <div className="appWrapperContent">
                <Route path='/Profile' render={() => <Profile
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
