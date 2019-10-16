import React from 'react';
import {setProfile} from "../../redux/profileReducer";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {Redirect, withRouter} from "react-router-dom";
import {setCurrentUserID} from "../../redux/usersReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.setProfile(userId);
        /*usersAPI.profile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });*/
    };

    componentDidUpdate(prevProps) {
        debugger
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            let userId = this.props.match.params.userId;
            if (!userId) {
                userId = this.props.userId;
            }
            this.props.setProfile(userId);
        }
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='Login'/>;

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}

let mapStateToProps = (state) => {

    return {
        profile: state.profile.profile,
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        currentUserId: state.users.currentUserId
    }
};

let WithUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile, setCurrentUserID})(WithUrlContainerComponent);