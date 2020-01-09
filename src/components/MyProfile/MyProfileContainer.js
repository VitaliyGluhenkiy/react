import React from 'react'
import MyProfile from "./MyProfile";
import * as axios from 'axios';
import {getProfileSuccess, setProfileSuccess, setUserProfile} from "../../redux/myWallReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


class MyProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2;
        }

        this.props.getProfileSuccess(userId);


    }

    render(){
        return (
           <MyProfile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.myWallPage.profile
})

let withUrlDataContainerComponent = withRouter(MyProfileContainer)

export default connect (mapStateToProps , {getProfileSuccess})(withUrlDataContainerComponent) ;