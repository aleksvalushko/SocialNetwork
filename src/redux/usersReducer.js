import {usersAPI} from "../api/api";
import {updateFunctionInArray} from "../helpers/objectHelpers";

const FOLLOW = 'SN/USERS/FOLLOW';
export const followSuccess = (userId) => (
    {type: FOLLOW, userId}
);
const UNFOLLOW = 'SN/USERS/UNFOLLOW';
export const unfollowSuccess = (userId) => (
    {type: UNFOLLOW, userId}
);
const SET_USERS = 'SN/USERS/SET_USERS';
export const setUsers = (users) => (
    {type: SET_USERS, users}
);
const SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE';
export const setCurrentPage = (currentPage) => (
    {type: SET_CURRENT_PAGE, currentPage}
);
const SET_TOTAL_USERS_COUNT = 'SN/USERS/SET_TOTAL_USERS_COUNT';
export const setTotalUsersCount = (totalCount) => (
    {type: SET_TOTAL_USERS_COUNT, count: totalCount}
);
const SET_IS_FETCHING = 'SN/USERS/SET_IS_FETCHING';
export const setIsFetching = (isFetching) => (
    {type: SET_IS_FETCHING, isFetching}
);
const TOGGLE_FOLLOWING_IN_PROGRESS = 'SN/USERS/TOGGLE_FOLLOWING_IN_PROGRESS';
export const toggleFollowingInProgress = (isFetching, userId) => (
    {type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId}
);

const SET_CURRENT_USERID = 'SN/USERS/SET_CURRENT_USERID';
export const setCurrentUserID = (id) => (
    {type: SET_CURRENT_USERID, id}
);

let initState = {
    users: [],
    pageSize: 40,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: true,
    followingInProgress: [],
    currentUserId: null
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateFunctionInArray(state.users, action.userId, 'id', {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateFunctionInArray(state.users, action.userId, 'id', {followed: false})
            };
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_CURRENT_USERID:
            return {
                ...state,
                currentUserId: action.id
            };

        default:
            return state;
    }
};


/*ThunkCreators*/
export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setIsFetching(false));
    }
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId));
};

export const follow = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
};

export const unfollow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};

export default usersReducer;