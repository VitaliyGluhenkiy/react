const SEND_CONTENT_TEXT = 'SEND_CONTENT_TEXT'

const initialState = {
    text: [
        {id: 1 , message: '123'},
        {id: 2 , message: '123'}
    ] ,
    textMEs: [
        {id: 1 , message: '123'}
    ]
}

const contentReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_CONTENT_TEXT:
            let body = action.newTextBody
            return {
                ...state,
                text: [...state.text , { id:2 , message:body}]
            }
        default :
            return state

    }
}


export const sendContentTextAC = (newTextBody) => ({
    type: SEND_CONTENT_TEXT, newTextBody
})


export default contentReducer