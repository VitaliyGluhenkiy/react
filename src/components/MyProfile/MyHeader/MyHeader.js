import React from 'react'
import c from './MyHeader.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import MyProfileStatus from './MyProfileStatus'
import MyProfileStatusWithHooks from "./MyProfileStatusWithHooks";

const MyHeader = (props) => {

    if(!props.profile) {
        return <div><Preloader/></div>
    }

    return (
        <div className={c.myname}>
            <div className={c.logo}>
                <img src={props.profile.photos.small} alt=""/>
                <MyProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
            </div>
            <div className={c.name}>
               <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <p>г.Бровары</p>
            </div>
        </div>
    )
}



export default MyHeader;