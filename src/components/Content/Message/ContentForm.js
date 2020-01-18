import React from 'react'
import {Field, reduxForm} from "redux-form";

const ContentForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component="textarea" name="newTextBody" />
                <button>Submit</button>
            </form>
        </div>
    )
}

const ContentFormRedux = reduxForm({
    form: 'contentForm'
})(ContentForm)

export default ContentFormRedux