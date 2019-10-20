import React from 'react';
import {setProfile} from "../../redux/profileReducer";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {Redirect, withRouter} from "react-router-dom";
import {setCurrentUserID} from "../../redux/usersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
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



let mapStateToProps = (state) => {

    return {
        profile: state.profile.profile,
        userId: state.auth.userId,
        currentUserId: state.users.currentUserId
    }
};
/*let WithProfileRedirectComponent = withAuthRedirect(ProfileContainer);
let WithUrlContainerComponent = withRouter(WithProfileRedirectComponent);
connect(mapStateToProps, {setProfile, setCurrentUserID})(WithUrlContainerComponent);  //один из вариантов оборачивания компонент контейнерными*/

export default compose(
    connect(mapStateToProps, {setProfile, setCurrentUserID}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);