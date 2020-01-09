import React from 'react'

import Friends from "./Friends";
import {connect} from "react-redux";

const FriendsContainer = (props) => {

    return (
        <div>
            <Friends friendList={props.friendList}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        friendList: state.friendsPage.friendList
    }
}

let mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps) (FriendsContainer);