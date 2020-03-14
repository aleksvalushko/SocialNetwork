import React from 'react';
import Friends from "./Friends";
import {connect} from 'react-redux'
import {getUsers} from "../../redux/usersSelector";

const mapStateToProps = (state) => {
  return{
      users: getUsers(state)
  }
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;