import React from 'react'
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addNewMessageAC} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsData.dialogs,
        newPostText: state.dialogsData.newPostText,
        messageNew: state.dialogsData.message,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(addNewMessageAC(newMessageBody))
        },
    }

}

export default compose(
    connect(mapStateToProps, mapDispatchToProps ),
    withAuthRedirect
)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(AuthRedirectComponent)
//
//
// export default DialogsContainer;