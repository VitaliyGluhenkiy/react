const SET_NAMES = 'SET-NAMES'
const ADD_NEW_FRIENDS_MESSAGE = 'ADD_NEW_FRIENDS_MESSAGE'

let initialState = {
    friendList : [
        {id: 1 , name: 'Vasya', age: '20', sity: 'Brovary'},
        {id: 2 , name: 'Vasya123', age: '20', sity: 'Brovary'},
        {id: 3 , name: 'Vasya45', age: '20', sity: 'Brovary'},
        {id: 4 , name: 'Vasya678', age: '20', sity: 'Brovary'},
    ],
    names: ''

}

const friendsReducer = ( state = initialState, action) => {
    switch(action.type) {
        case SET_NAMES:{
            return {
                ...state,
                names: action.names
            }
        }
        case ADD_NEW_FRIENDS_MESSAGE: {
            let newMessage = action.newFriendsMessage
            return {
                ...state,
                friendList: [...state.friendList , { id: 5, name: newMessage} ]

            }
        }
        default:
            return state
    }
}

export const addNewFriendsMessage = (newFriendsMessage) => {
    return {
        type: ADD_NEW_FRIENDS_MESSAGE, newFriendsMessage
    }
}


export default friendsReducer;