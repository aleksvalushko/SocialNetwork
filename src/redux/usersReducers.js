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

const FOLLOW = 'SN/USERS/FOLLOW';
export const follow = (userId) => (
    {type: FOLLOW, userId}
);
const UNFOLLOW = 'SN/USERS/UNFOLLOW';
export const unfollow = (userId) => (
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
    isFetching: true
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
        default:
            return state;
    }
};

export default usersReducer;