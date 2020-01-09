import React from 'react'
import classes from './Friends.module.css'
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
        let friendsPage = props.friendsData.map( f => <FriendsItem name={f.name} id={f.id} image={f.image} />)
    return (
        <div>
            <div>
                {friendsPage}
            </div>
        </div>
    )
}

export default Friends;