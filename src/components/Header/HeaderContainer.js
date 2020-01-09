import React from 'react'
import * as axios from "axios";
import Header from "./Header";
import {connect} from 'react-redux'
import {getAuthUserData} from "../../redux/authReducer";

class HeaderComponent extends React.Component{

    componentDidMount() {

        this.props.getAuthUserData()
    }

    render(){
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authPage.isAuth,
    login: state.authPage.login
})
export default connect(mapStateToProps,{getAuthUserData})(HeaderComponent);