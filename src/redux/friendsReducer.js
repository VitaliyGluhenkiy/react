

let initialState = {
    friendList : [
        {id: 1 , name: 'Vasya', age: '20', sity: 'Brovary'},
        {id: 2 , name: 'Vasya123', age: '20', sity: 'Brovary'},
        {id: 3 , name: 'Vasya45', age: '20', sity: 'Brovary'},
        {id: 4 , name: 'Vasya678', age: '20', sity: 'Brovary'},
    ]

}

const friendsReducer = ( state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default friendsReducer;