import React from 'react';
import {
    follow, requestUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow
} from "../../redux/usersReducer";
import {connect} from 'react-redux';
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalItemsCount, getUsers
} from "../../redux/usersSelector";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPagesChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalItemsCount={this.props.totalItemsCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPagesChange={this.onPagesChange}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            />
        </>
    }
}

//используем selector в mapStateToProps

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalItemsCount: getTotalItemsCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

/*withAuthRedirect(connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleFollowingInProgress, /!*getUsers: getUsersThunkCreator}*!/ getUsers})(UsersContainer));*/

export default compose(
        connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollowingInProgress, /*getUsers: getUsersThunkCreator}*/ getUsers: requestUsers})
)(UsersContainer);