// import dialogsReducer from "./dialogsReducer";
// import myWallReducer from "./myWallReducer";
//
// let store = {
//     _state: {
//
//             dialogsData: {
//                 dialogs: [
//                     {id: 1 , name: 'Vetal'},
//                     {id: 2 , name: 'Kolya'},
//                     {id: 3 , name: 'Nastya'},
//                     {id: 4 , name: 'Olya'},
//                     {id: 5 , name: 'Katya'},
//                 ],
//                 message: [
//                     {id: 1 , message: 'Hello world'},
//                     {id: 2 , message: 'Hello worl'},
//                     {id: 3 , message: 'Hello wor'},
//                     {id: 4 , message: 'Hello wo'},
//                     {id: 5 , message: 'Hello w'}
//                 ],
//                 newPostText: 'hello man',
//             },
//             friendsData: [
//                 {id:1 , name: 'Vetal' , image: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'},
//                 {id:2 , name: 'Vetal' , image: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'},
//                 {id:3 , name: 'Vetal', image: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'}
//             ],
//
//             myWallPage: {
//                 posts: [
//                     { id: 1 , name: 'Vetal', message: 'Privet kak dela'},
//                     { id: 2 , name: 'Vetal', message: 'Privet kak dela'},
//                     { id: 3 , name: 'Vetal', message: 'Privet kak dela'},
//                     { id: 4 , name: 'Vetal', message: 'Privet kak dela'},
//                 ],
//                 newPostWall: 'aasgvvccc'
//             },
//
//
//         },
//     _callSubscriber(){
//         console.log('satte')
//     },
//
//
//     getState(){
//         return this._state;
//     },
//     subscribe(observer){
//         this._callSubscriber = observer;
//     },
//
//
//     dispatch(action){
//
//         this._state = dialogsReducer(this._state, action)
//
//         this._state.myWallPage = myWallReducer(this._state.myWallPage, action)
//
//         this._callSubscriber(this._state)
//
//     }
// }
//
//
//
//
// export default store;
//
// window.store = store;