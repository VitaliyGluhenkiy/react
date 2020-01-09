import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import MessageItems from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {addNewMessageAC, onPostChangeAC} from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    let buttonClick = React.createRef();

    let newMessage = () => {
        props.addNewMessage();

    }

    let onPostChange = () => {
        let newText = buttonClick.current.value;
        props.messageChange(newText);
    }

    let dialogsPage = props.dialogsPage
        .map( dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />)

    let messageNew = props.messageNew.map( message => <MessageItems id={message.id} message={message.message}/>)




    return (
        <div className={classes.dialogsFile} >
            <div className={classes.dialogsItems}>
                {dialogsPage}
            </div>
            <div className={classes.messagesItems}>
                {messageNew}
            </div>
            <div>
                <textarea onChange={onPostChange} ref={buttonClick} value={props.newPostText} />
                <button onClick={newMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;