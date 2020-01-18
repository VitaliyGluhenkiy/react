import React from 'react'
import {Field, reduxForm} from "redux-form";

const FriendsForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component="textarea" name="newFriendsMessage" />
                <button>Отправить</button>
            </form>
        </div>
    )
}

const FriendsFormRedux = reduxForm({
    form: 'friendsForm'
})(FriendsForm)

export default FriendsFormRedux