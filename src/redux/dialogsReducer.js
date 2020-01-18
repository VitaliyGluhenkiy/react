const ADD_POST = 'ADD-POST'


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

}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = action.newMessageBody
            return {
                ...state,
                message: [...state.message , {id: 8, message: newPost}]
            }
        default :
            return state
    }
}


export const addNewMessageAC = (newMessageBody) => {
    return {
        type: ADD_POST ,  newMessageBody
    }
}



export default dialogsReducer;