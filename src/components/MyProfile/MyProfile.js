import React from 'react'
import MyHeader from "./MyHeader/MyHeader";

import MyWallContainer from "./MyWall/MyWallContainer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const MyProfile =  (props) => {
    return (
        <div>
            <MyHeader updateStatus={props.updateStatus} profile={props.profile} status={props.status}/>
            <MyWallContainer store={props.store}/>
        </div>
    )
}



export default MyProfile;