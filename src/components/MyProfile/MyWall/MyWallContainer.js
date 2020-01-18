import React from 'react'
import {addPostWallAC, updateWallTextAC} from "../../../redux/myWallReducer";
import MyWall from "./MyWall";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        myWallPage: state.myWallPage.posts,
        newPostWall: state.myWallPage.newPostWall
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateWallText: (text) => {
            dispatch(updateWallTextAC(text))

        },
        addPostWall: (message) => {
            dispatch(addPostWallAC(message))

        }
    }

}

const MyWallContainer = connect(mapStateToProps , mapDispatchToProps)(MyWall)

export default MyWallContainer;