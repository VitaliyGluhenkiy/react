const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
        dialogs: [
            {id: 1 , name: 'Vetal'},
            {id: 2 , name: 'Kolya'},
            {id: 3 , name: 'Nastya'},
            {id: 4 , name: 'Olya'},
            {id: 5 , name: 'Katya'},
        ],
        message: [
            {id: 1 , message: 'Hello world'},
            {id: 2 , message: 'Hello worl'},
            {id: 3 , message: 'Hello wor'},
            {id: 4 , message: 'Hello wo'},
            {id: 5 , message: 'Hello w'}
        ],
        newPostText: 'hello man',
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = state.newPostText
            return {
                ...state,
                newPostText: '',
                message: [...state.message , {id: 8, message: newPost}]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default :
            return state
    }
}


export const addNewMessageAC = () => {
    return {
        type: ADD_POST
    }
}

export const onPostChangeAC = (newText) => {
    return {
        type:UPDATE_NEW_POST_TEXT, newText: newText
    }
}


export default dialogsReducer;