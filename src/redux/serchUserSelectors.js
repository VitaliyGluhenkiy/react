export const getSearchUsers = (state) => {
    return state.searchData.users
}

export const getPageSize = (state) => {
    return state.searchData.pageSize
}

export const getTotalItemsCount = (state) => {
    return state.searchData.totalItemsCount
}

export const getCurrentPage = (state) => {
    return state.searchData.currentPage
}

export const getIsLoader = (state) => {
    return state.searchData.isLoader
}

export const getIsFetching = (state) => {
    return  state.searchData.isFetching
}

export const getFollowingInProgress = (state) => {
    return  state.searchData.followingInProgress
}