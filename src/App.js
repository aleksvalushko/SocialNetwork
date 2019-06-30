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
import Friends from "./components/Friends/Friends";
import PropTypes from 'prop-types';

const App = (props) => {

    let profile = props.state.profile;
    let dialogs = props.state.dialogs;
    let friends = props.state.friends;
    let dispatch = props.store.dispatch;
    return (
        <div className="appWrapper">
            <Header/>
            <Navigation friends={friends}/>
            <div className="appWrapperContent">
                <Route path='/Profile' render={() => <Profile
                    profile={profile} dispatch={dispatch}/>}/>
                <Route path='/Dialogs' render={() => <Dialogs
                    dialogs={dialogs} dispatch={dispatch}/>}/>
                <Route path='/Friends' render={() => <Friends friends={friends}/>}/>
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
