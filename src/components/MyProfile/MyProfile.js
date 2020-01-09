import React from 'react'
import MyHeader from "./MyHeader/MyHeader";

import MyWallContainer from "./MyWall/MyWallContainer";

const MyProfile =  (props) => {

    return (
        <div>
            <MyHeader profile={props.profile}/>
            <MyWallContainer store={props.store}/>
        </div>
    )
}

export default MyProfile;