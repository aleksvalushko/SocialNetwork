import React from 'react';
import {setUserProfile} from "../../redux/profileReducers";
import Profile from "./Profile";
import * as axios from "axios/index";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 1294;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        });

    };

    render(){

        return(
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

export default connect (mapStateToProps, {setUserProfile})(WithUrlContainerComponent);