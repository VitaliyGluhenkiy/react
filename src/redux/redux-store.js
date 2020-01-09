import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import myWallReducer from "./myWallReducer";
import searchUserReducer from "./searchUserReducer";
import authReducer from "./authReducer";
import ReduxThunk from 'redux-thunk'
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({
    myWallPage: myWallReducer,
    dialogsData : dialogsReducer,
    searchData: searchUserReducer,
    authPage: authReducer,
    friendsPage: friendsReducer
});


let store = createStore(reducers , applyMiddleware(ReduxThunk));

window.store = store;

export default store;