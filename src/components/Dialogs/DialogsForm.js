import React from 'react'
import {Field, reduxForm} from "redux-form";

const DialogsLogin = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field placeholder='text' name="newMessageBody"   component="textarea"/>
                <button >Отправить</button>
            </form>
        </div>
    )

}

const DialogsReduxLogin = reduxForm({
    form : 'dialogsForm'
})(DialogsLogin)

export default DialogsReduxLogin