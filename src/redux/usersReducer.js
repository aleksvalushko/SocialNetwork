/*const FOLLOW = 'SN/USERS/FOLLOW';
export const followAC = (userId) => (
    {type: FOLLOW, userId}
);
const UNFOLLOW = 'SN/USERS/UNFOLLOW';
export const unfollowAC = (userId) => (
    {type: UNFOLLOW, userId}
);
const SET_USERS = 'SN/USERS/SET_USERS';
export const setUsersAC = (users) => (
    {type: SET_USERS, users}
);
const SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE';
export const setCurrentPageAC = (currentPage) => (
    {type: SET_CURRENT_PAGE, currentPage}
);
const SET_TOTAL_USERS_COUNT = 'SN/USERS/SET_TOTAL_USERS_COUNT';
export const setTotalUsersCountAC = (totalCount) => (
    {type: SET_TOTAL_USERS_COUNT, count: totalCount}
);
const SET_IS_FETCHING = 'SN/USERS/SET_IS_FETCHING';
export const setIsFetchingAC = (isFetching) => (
    {type: SET_IS_FETCHING, isFetching}
);*/

import {usersAPI} from "../api/api";

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
    users: [
        /*{
            id: 1,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ',
            followed: false,
            fullName: 'Masha',
            status: 'I am the first user',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ',
            followed: true,
            fullName: 'Nastya',
            status: 'I am the second user',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8DD1nIUzMTqtW20DOu1IM_FImz8HK-f34YO89SxWMD54nOoaTQ',
            followed: false,
            fullName: 'Sasha',
            status: 'I am the third user',
            location: {city: 'Minsk', country: 'Belarus'}
        }*/
    ],
    pageSize: 30,
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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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
export const /*getUsersThunkCreator*/getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setIsFetching(false));
        });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId));
            });
    }
};

export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersAPI.unfollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId));
        });
};

export default usersReducer;