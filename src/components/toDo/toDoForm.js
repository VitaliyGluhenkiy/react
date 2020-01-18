import React from 'react'
import {Field, reduxForm} from "redux-form";

const ToDoForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component="input"  name="title"/>

                <button >Add</button>
            </form>
        </div>
    )
}

export const ToDoFormRedux = reduxForm({
    form : "toDoForm"
})(ToDoForm)