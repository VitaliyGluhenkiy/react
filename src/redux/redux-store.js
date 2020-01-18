import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import myWallReducer from "./myWallReducer";
import searchUserReducer from "./searchUserReducer";
import authReducer from "./authReducer";
import ReduxThunk from 'redux-thunk'
import friendsReducer from "./friendsReducer";
import toDoReducer from "./toDoReducer";
import { reducer as formReducer} from 'redux-form'
import contentReducer from "./contentReducer";


let reducers = combineReducers({
    myWallPage: myWallReducer,
    dialogsData : dialogsReducer,
    searchData: searchUserReducer,
    authPage: authReducer,
    friendsPage: friendsReducer,
    contentPage: contentReducer,
    toDoPage: toDoReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(ReduxThunk)))



// let store = createStore(reducers , applyMiddleware(ReduxThunk));

// window.store = store;

export default store;