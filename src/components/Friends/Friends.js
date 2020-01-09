import React from 'react'
import classes from './Friends.module.css'
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
    let friendsPage = props.friendList.map( f => <div>
       <div>{f.name}</div>  <div>{f.age}</div> {f.sity}
    </div>)
    return (
        <div>
            <div>
                {friendsPage}
                1
            </div>
        </div>
    )
}

export default Friends;