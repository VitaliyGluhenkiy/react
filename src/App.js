import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import MyProfile from "./components/MyProfile/MyProfile";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SearchUser from "./components/SearchUsers/SearchUser";
import SearchUserContainer from "./components/SearchUsers/SearchUserContainer";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer";
import HeaderComponent from "./components/Header/HeaderContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";



const App = (props) => {
    return (
    <div className="app-wrapper">
        <HeaderComponent store={props.store}/>
        <Navigation/>
        <div className='app-wrapper-content'>
            <Route path='/content' render={() => <Content/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer
                store={props.store}
            />}/>
            <Route path='/myprofile/:userId?' render={() => <MyProfileContainer
            />}/>
            <Route path='/search' render={() => <SearchUserContainer
                store={props.store}
            />}/>
            <Route path='/friends' render={() => <FriendsContainer/>}/>
        </div>

        <Footer/>


    </div>
  );
}

export default App;
