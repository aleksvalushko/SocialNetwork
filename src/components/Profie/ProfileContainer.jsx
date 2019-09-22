import React from 'react';
import {setProfile} from "../../redux/profileReducers";
import Profile from "./Profile";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1294;
        }

        this.props.setProfile(userId);
        /*usersAPI.profile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });*/
    };

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
};

let mapStateToProps = (state) => {

    return {
        profile: state.profile.profile
    }
};

let WithUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile})(WithUrlContainerComponent);