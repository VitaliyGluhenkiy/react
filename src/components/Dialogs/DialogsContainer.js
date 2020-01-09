import React from 'react'
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addNewMessageAC, onPostChangeAC} from "../../redux/dialogsReducer";

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageAC())
        },
        messageChange: (newText) => {
            dispatch(onPostChangeAC(newText))
        }
    }

}

let mapStateToProps = (state) => {
    debugger;
    return {
        dialogsPage: state.dialogsData.dialogs,
        newPostText: state.dialogsData.newPostText,
        messageNew: state.dialogsData.message
    }
}



const DialogsContainer = connect( mapDispatchToProps,mapStateToProps  )(Dialogs)

export default DialogsContainer;