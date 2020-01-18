import React from 'react'
import MyProfile from "./MyProfile";
import {getProfileSuccess, getStatus, setProfileSuccess, updateStatus} from "../../redux/myWallReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class MyProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 5320;
        }

        this.props.getProfileSuccess(userId);
        this.props.getStatus(userId)

    }

    render(){
        return (
           <MyProfile updateStatus={this.props.updateStatus} status={this.props.status} {...this.props} profile={this.props.profile} isAuth={this.props.isAuth}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.myWallPage.profile,
    status: state.myWallPage.status,
})

export default compose(
    connect (mapStateToProps , {getProfileSuccess, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(MyProfileContainer)