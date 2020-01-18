import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import {Route} from "react-router-dom";
import SearchUserContainer from "./components/SearchUsers/SearchUserContainer";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer";
import HeaderComponent from "./components/Header/HeaderContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Login from "./components/Login/Login";
// import ContentContainer from "./components/Content/ContentContainer";
import ToDo from "./components/toDo/toDo";
import Preloader from "./common/Preloader/Preloader";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ContentContainer = React.lazy(() => import('./components/Content/ContentContainer'));

const App = (props) => {
    return (
    <div className="app-wrapper">
        <HeaderComponent store={props.store}/>
        <Navigation/>
        <div className='app-wrapper-content'>
            <Route path='/content' render={() =>
                <React.Suspense fallback={<Preloader/>}>
                    <ContentContainer/>
                </React.Suspense>
            }/>
            <Route path='/dialogs' render={() =>
                <React.Suspense fallback={<Preloader/>}>
                    <DialogsContainer/>
                </React.Suspense>
            }/>
            <Route path='/myprofile/:userId?' render={() => <MyProfileContainer
            />}/>
            <Route path='/search' render={() => <SearchUserContainer
                store={props.store}
            />}/>
            <Route path='/friends' render={() => <FriendsContainer/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/toDo' render={ () => <ToDo/>}/>
        </div>

        <Footer/>


    </div>
  );
}

export default App;
