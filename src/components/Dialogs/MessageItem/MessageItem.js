import React from 'react'
import classes from "../Dialogs.module.css";

const MessageItems = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

export default MessageItems;