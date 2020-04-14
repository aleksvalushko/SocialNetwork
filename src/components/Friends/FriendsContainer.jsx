import React from 'react';
import Friends from "./Friends";
import {connect} from 'react-redux'
import {getCurrentPage, getFollowedUsers, getPageSize} from "../../redux/usersSelector";

class FriendsContainer extends React.Component{

    componentDidMount() {

    }

    render(){
        return <Friends friends={this.props.friends}/>
    }
}

const mapStateToProps = (state) => {

  return{
      friends: getFollowedUsers(state),
      pageSize: getPageSize(state),
      currentPage: getCurrentPage(state)
  }
};

export default connect(mapStateToProps)(FriendsContainer);