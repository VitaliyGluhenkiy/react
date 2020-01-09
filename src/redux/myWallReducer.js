import {profileAPI} from "../api/api";

const ADD_POST_WALL = 'ADD-POST-WALL'
const UPDATE_WALL_TEXT = 'UPDATE-WALL-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


let initialState = {
        posts: [
            { id: 1 , name: 'Vetal', message: 'Privet kak dela'},
            { id: 2 , name: 'Vetal', message: 'Privet kak dela'},
            { id: 3 , name: 'Vetal', message: 'Privet kak dela'},
            { id: 4 , name: 'Vetal', message: 'Privet kak dela'},
        ],
        newPostWall: 'aasgvvccc',
        profile: null
}

const myWallReducer = (state = initialState , action) => {
    switch(action.type) {
        case ADD_POST_WALL: {
            let newPostWall = {
                id: 5,
                name: 'Sanya',
                message: state.newPostWall
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPostWall)
            stateCopy.newPostWall=''
            return stateCopy
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
        default:
            return state

    }

}

export const addPostWallAC = () => {
    return {
        type: ADD_POST_WALL
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



export default myWallReducer;