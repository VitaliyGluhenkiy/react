import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_LOADER = 'TOGGLE_IS_LOADER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1 ,
    isLoader: true ,
    isFetching: false,
    followingInProgress: []
}

const searchUserReducer = (state = initialState , action) => {
    switch(action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {
                            ...u, followed: true
                        }
                    }
                   return u;

                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {
                            ...u, followed: false
                        }
                    }
                    return u;

                })
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_LOADER:
            return {
                ...state, isLoader: action.toggleIsLoader
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.toggleIsFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.toggleProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state

    }

}


export const followSuccess = (userID) => ({type: FOLLOW , userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW , userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type:SET_TOTAL_USERS_COUNT, totalCount})
export const setIsLoader = (toggleIsLoader) => ({type:TOGGLE_IS_LOADER, toggleIsLoader})
export const setIsFetching = (toggleIsFetching) => ({type:TOGGLE_IS_FETCHING, toggleIsFetching})
export const setFollowingInProgress = (toggleProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, toggleProgress, userId})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsLoader(true))
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsLoader(false))
                dispatch(setIsFetching(false))
                dispatch (setUsers(data.items))
                dispatch (setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true , userId))
        usersAPI.followSuccess(userId)
            .then(response => {
                    if (response.data.resultCode == 0) {
                        dispatch(followSuccess(userId))
                    }
                    dispatch(setFollowingInProgress(false , userId))
                }
            )
    }
}


export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingInProgress(true , userId))
        usersAPI.unfollowSuccess(userId)
            .then(response => {
                    if (response.data.resultCode == 0) {
                        dispatch(unfollowSuccess(userId))
                    }
                    dispatch(setFollowingInProgress(false , userId))
                }
            )
    }
}



export default searchUserReducer;