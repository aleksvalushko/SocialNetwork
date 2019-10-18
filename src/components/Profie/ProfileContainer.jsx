import React from 'react';
import {setProfile} from "../../redux/profileReducer";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {Redirect, withRouter} from "react-router-dom";
import {setCurrentUserID} from "../../redux/usersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}

let WithProfileRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {

    return {
        profile: state.profile.profile,
        userId: state.auth.userId,
        currentUserId: state.users.currentUserId
    }
};

let WithUrlContainerComponent = withRouter(WithProfileRedirectComponent);

export default connect(mapStateToProps, {setProfile, setCurrentUserID})(WithUrlContainerComponent);  //один из вариантов оборачивания компонент контейнерными