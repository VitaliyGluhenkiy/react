import {profileAPI} from "../api/api";

const ADD_POST_WALL = 'ADD-POST-WALL'
const UPDATE_WALL_TEXT = 'UPDATE-WALL-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


let initialState = {
        posts: [
            { id: 1 , name: 'Vetal', message: 'Privet kak dela'},
            { id: 2 , name: 'Vetal', message: 'Privet kak dela'},
            { id: 3 , name: 'Vetal', message: 'Privet kak dela'},
            { id: 4 , name: 'Vetal', message: 'Privet kak dela'},
        ],
        newPostWall: 'aasgvvccc',
        profile: null,
        status: ''
}

const myWallReducer = (state = initialState , action) => {
    switch(action.type) {
        case ADD_POST_WALL: {
           let body = action.message
            return {
                ...state,
                posts: [...state.posts , {id: 5 , message: body}]
        }
        }
        case UPDATE_WALL_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostWall = action.newWallText
            return stateCopy

        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state

    }

}

export const setStatus = (status) => ({type: SET_STATUS, status})

export const addPostWallAC = (message) => {
    return {
        type: ADD_POST_WALL , message
    }
}

export const updateWallTextAC = (newWallText) => ({type: UPDATE_WALL_TEXT , newWallText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE , profile})

export const getProfileSuccess = (userId) => (dispatch) => {
        profileAPI.setProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }

export const getStatus = (userId) => (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
}

export const updateStatus = (status) => (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setStatus(status))
                }
            })
}

export default myWallReducer;