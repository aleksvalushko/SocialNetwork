export const getUsers = (state) => {
    return state.users.users;
};

export const getPageSize = (state) => {
    return state.users.pageSize;
};

export const getCurrentPage = (state) => {
    return state.users.currentPage;
};

export const getTotalItemsCount = (state) => {
    return state.users.totalItemsCount;
};

export const getIsFetching = (state) => {
    return state.users.isFetching;
};

export const getFollowingInProgress = (state) => {
    return state.users.followingInProgress;
};