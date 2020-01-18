import {toDoListAPI} from "../api/api";

const TO_DO_DELETE = 'TO_DO_DELETE'
const SET_TO_DO_POST_DATA = 'SET_TO_DO_POST_DATA'


let initialState = {
    firstToDo: [
        {id: 1, text: 'первое задание выведи эту строчку'},
        {id: 2 , text: 'научись удалять любую из строчем'},
        {id: 3 , text: 'научись создавать TODO'}
    ],
    title: ''


}

const toDoReducer = (state = initialState, action) => {
    switch(action.type) {
        case TO_DO_DELETE: {
            return {
                ...state.firstToDo = ''
            }
        }
        case SET_TO_DO_POST_DATA: {
            return {
                ...state,
                ...state.title
            }
        }
        default:
            return state
    }

}

export const setToDoPostData = (title) => ({
    type: SET_TO_DO_POST_DATA , title
})

export const toDoDelete  = () => ({
    type: TO_DO_DELETE
})

export const toDoPost = (title) => (dispatch) => {
    toDoListAPI.postToDo(title)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setToDoPostData())
            }
        })
}




export default toDoReducer