import React from 'react'
import SearchUser from "./SearchUser";
import {connect} from "react-redux";
import {
    follow, getUsers, setFollowingInProgress, unfollow
} from "../../redux/searchUserReducer";
import preloaderTwo from '../../assets/image/images.jpg'
import Preloader from "../../common/Preloader/Preloader";

class SearchUserContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

    }


    render() {

        return (
            <>
            {this.props.isFetching ? null : <img src={preloaderTwo} alt=""/>}
            {this.props.isLoader ? <Preloader/> : null}
            <SearchUser
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                searchPage={this.props.searchPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isLoader={this.props.isLoader}
                followingInProgress={this.props.followingInProgress}
                setFollowingInProgress={this.props.setFollowingInProgress}
            />

            </>
        )

    }
}


let mapStateToProps = (state) => {
    return {
        searchPage: state.searchData.users,
        pageSize: state.searchData.pageSize,
        totalUsersCount: state.searchData.totalUsersCount,
        currentPage: state.searchData.currentPage,
        isLoader: state.searchData.isLoader,
        isFetching: state.searchData.isFetching,
        followingInProgress: state.searchData.followingInProgress
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(follow(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollow(userID))
        },
        setFollowingInProgress: (toggleProgress) => {
            dispatch(setFollowingInProgress(toggleProgress))
        },
        getUsers: () => {
            dispatch(getUsers())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchUserContainer);
