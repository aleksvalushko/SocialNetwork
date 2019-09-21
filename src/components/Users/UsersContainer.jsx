import React from 'react';
import {
    /*followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC*/
    follow, getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow
} from "../../redux/usersReducers";
import {connect} from 'react-redux';
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    /*constructor(props){
        super(props);
    };*/

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        /*this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.setIsFetching(false);
            });*/
    };

    onPagesChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        /*this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setIsFetching(false);
            });*/
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
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

const mapStateToProps = (state) => {

    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        totalUsersCount: state.users.totalUsersCount,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
};

/*const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching));
        }
    }
};*/

export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleFollowingInProgress, /*getUsers: getUsersThunkCreator}*/ getUsers})(UsersContainer);