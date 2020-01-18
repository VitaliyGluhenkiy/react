import React from 'react'
import MyWallItem from "./MyWallItem/MyWallItem";
import {addPostWallAC, updateWallTextAC} from "../../../redux/myWallReducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../helpers/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

let MyWallForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required]} component="textarea" name="message"   placeholder="text" />
            <button>Отправить</button>

        </form>
    )
}

const MyWallFormRedux = reduxForm ({
    form: 'myWallFrom'
})(MyWallForm)

export default MyWallFormRedux;