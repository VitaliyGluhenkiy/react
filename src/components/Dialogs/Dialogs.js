import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink, Redirect} from "react-router-dom";
import MessageItems from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {addNewMessageAC, onPostChangeAC} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import DialogsReduxLogin from "./DialogsForm";

const Dialogs = (props) => {

    let dialogsPage = props.dialogsPage
        .map( dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />)

    let messageNew = props.messageNew.map( message => <MessageItems id={message.id} message={message.message}/>)


    const addNewMessage = (values) => {
        // alert(values.newMessageBody)
        // props.newMessage(values.newMessage)
        props.sendMessage(values.newMessageBody);
    }


    return (
        <div className={classes.dialogsFile} >
            <div className={classes.dialogsItems}>
                {dialogsPage}
            </div>
            <div className={classes.messagesItems}>
                {messageNew}
            </div>
            <div>
               <DialogsReduxLogin onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}



export default Dialogs;