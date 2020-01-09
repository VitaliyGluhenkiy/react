import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <div className={classes.header}>

            <header className='logo'>
                <div className={classes.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

                </div>
                <img src="http://pngimg.com/uploads/vkontakte/vkontakte_PNG19.png" alt=""/>
            </header>

        </div>
    )
}

export default Header;