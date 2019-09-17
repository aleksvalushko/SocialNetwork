import React from 'react';
import {setUserProfile} from "../../redux/profileReducers";
import Profile from "./Profile";
import axios from './../../dal/axiosInstance';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1294;
        }

        usersAPI.profile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlContainerComponent);