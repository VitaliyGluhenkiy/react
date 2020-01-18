import React from 'react'

import Friends from "./Friends";
import {connect} from "react-redux";
import {addNewFriendsMessage} from "../../redux/friendsReducer";

const FriendsContainer = (props) => {

    return (
        <div>
            <Friends friendList={props.friendList} title={'title'}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        friendList: state.friendsPage.friendList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendFriendsMessage: (newFriendsMessage) => {
            dispatch(addNewFriendsMessage(newFriendsMessage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FriendsContainer);