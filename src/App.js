import React, {Component} from 'react';
import './Apps.sass';
import Navigation from "./components/Navigation/Navigation";
// import Dialogs from "./components/Dialogs/Dialogs";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializingApp} from "./redux/appReducer";
import Preloader from "./common/Preloader/Preloader";
import {compose} from "redux";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));

class App extends Component {

    componentDidMount() {
        this.props.initializingApp();
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="appWrapper">
                <HeaderContainer/>
                <Navigation/>
                <div className="appWrapperContent">
                    <Route path='/Login' render={() => <Login/>}/>
                    <Route path='/Profile/:userId?'     // знак ? после :userId - параметр :userId не обязателен
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <ProfileContainer/>
                               </React.Suspense>
                           }
                           }/>
                    <Route path='/Dialogs' render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                            <Dialogs/>
                        </React.Suspense>
                    }
                    }/>
                    {/*<Route path='/Friends' render={() => <FriendsContainer />}/>*/}
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializingApp}))(App);
