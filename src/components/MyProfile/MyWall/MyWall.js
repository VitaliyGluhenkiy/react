import React from 'react'
import MyWallItem from "./MyWallItem/MyWallItem";
import {addPostWallAC, updateWallTextAC} from "../../../redux/myWallReducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../helpers/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import MyWallFormRedux from "./MyWallForm";

const MyWall = (props) => {

    let myWallPage = props.myWallPage.map( m => <MyWallItem name={m.name} message={m.message}/>)

    const newMessageWall= (value) => {
        props.addPostWall(value.message)
    }
    return (
        <div>
            <MyWallFormRedux onSubmit={newMessageWall}/>
            <div>
                {myWallPage}
            </div>

        </div>
    )
}


export default MyWall;