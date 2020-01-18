import React from 'react'
import classes from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import FriendsItem from "../Friends/FriendsItem/FriendsItem";
import Friends from "../Friends/Friends";


const Navigation = (props) => {

    return (
        <div className={classes.navigation}>
            <div>
                <NavLink to="/myprofile" activeClassName={classes.active}>MyProfile</NavLink>
            </div>
            <div>
                <NavLink to="/content" activeClassName={classes.active}>Content</NavLink>
            </div>
            <div>
                <NavLink to="/info" activeClassName={classes.active}>Info</NavLink>
            </div>
            <div>
                <NavLink to="/music"activeClassName={classes.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
            </div>
            <div className='friends'>
                <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
            </div>
            <div className='search'>
                <NavLink to='/search' activeClassName={classes.active}>Search</NavLink>
            </div>
            <div className='login'>
                <NavLink to='/login' activeClassName={classes.active}>Login</NavLink>
            </div>
            <div>
                <NavLink to="/toDo" activeClassName={classes.active}>ToDo</NavLink>
            </div>
        </div>
    )
}

export default Navigation;