import React from 'react'
import classes from './FriendsItem.module.css'

const FriendsItem = (props) => {
    return (
        <div className={classes.block}>
            <div className={classes.image}>
                <img src='' alt=""/>
            </div>
            <div className={classes.name}>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.sity}</div>
        </div>
    )
}

export default FriendsItem;