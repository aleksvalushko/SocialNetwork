import React from 'react';
import {getStatus, savePhoto, saveProfile, getUserProfile, updateStatus} from "../../redux/profileReducer";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {setCurrentUserID} from "../../redux/usersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            /*if(!userId){
                return this.props.history.path('/Login');                         //Программный Redirect
            }*/
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    };

    componentDidUpdate(prevProps) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            let userId = this.props.match.params.userId;
            if (!userId) {
                userId = this.props.userId;
            }
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     isOwner={!this.props.match.params.userId}/>
        );
    };
}



let mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        userId: state.auth.userId,
        currentUserId: state.users.currentUserId,
        status: state.profile.status
    }
};
/*let WithProfileRedirectComponent = withAuthRedirect(ProfileContainer);
let WithUrlContainerComponent = withRouter(WithProfileRedirectComponent);
connect(mapStateToProps, {setProfile, setCurrentUserID})(WithUrlContainerComponent);  //один из вариантов оборачивания компонент контейнерными*/

export default compose(
    connect(mapStateToProps, {getUserProfile, setCurrentUserID, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);